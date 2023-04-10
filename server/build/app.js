import express from 'express';
import bodyParser from 'body-parser';
import { router as developersRouter } from './routes/developers.route.js';
export const app = express();
app.use(bodyParser.json());
app.use(developersRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
//# sourceMappingURL=app.js.map