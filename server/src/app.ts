import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { HttpError } from 'http-errors';
import { router as developersRouter } from './routes/developers.route.js';

export const app = express();
app.use(bodyParser.json());
app.use(developersRouter);

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
