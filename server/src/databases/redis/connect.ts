import { createClient, RedisClientOptions } from 'redis';
import { REDIS_HOST, REDIS_PORT } from '../../configs/app.config.js';

export const redisClient = createClient({
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
} as RedisClientOptions);

redisClient.on('connect', () => console.log(`Redis connected to ${REDIS_HOST}:${REDIS_PORT}`));
redisClient.on('error', () => redisClient.disconnect());
