import { app } from './app.js';
import { PORT, MONGODB_URL } from './configs/app.config.js';
import { connectMongoDB } from './databases/mongo/connect.js';
import { redisClient } from './databases/redis/connect.js';

async function startServer() {
  try {
    await redisClient.connect();

    await connectMongoDB(MONGODB_URL);

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Developers-manager app listening at port:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startServer().catch((error) => {
  console.error(error);
  process.exit(1);
});
