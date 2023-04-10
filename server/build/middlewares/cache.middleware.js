import { deleteCache, readCache } from '../services/cache.service.js';
export async function getCache(req, res, next) {
    const cacheKey = req.originalUrl;
    const result = await readCache(cacheKey);
    if (result) {
        res.json(JSON.parse(result));
        return;
    }
    next();
}
export async function clearAllCache(req, res, next) {
    await deleteCache();
    next();
}
//# sourceMappingURL=cache.middleware.js.map