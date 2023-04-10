import { Request, Response, NextFunction } from 'express';
import { deleteCache, readCache } from '../services/cache.service.js';

export async function getCache(req: Request, res: Response, next: NextFunction) {
  const cacheKey: string = req.originalUrl;

  const result = await readCache(cacheKey);

  if (result) {
    res.json(JSON.parse(result));
    return;
  }

  next();
}

export async function clearAllCache(req: Request, res: Response, next: NextFunction) {
  await deleteCache();

  next();
}
