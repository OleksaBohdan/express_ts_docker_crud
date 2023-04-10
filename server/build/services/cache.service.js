import { redisClient } from '../databases/redis/connect.js';
export async function createCache(cacheKey, cacheData) {
    try {
        const data = JSON.stringify(cacheData);
        await redisClient.set(cacheKey, data, { EX: 60, NX: true });
    }
    catch (err) {
        console.log(err);
    }
}
export async function readCache(cacheKey) {
    const result = await redisClient.get(cacheKey);
    return result;
}
export async function deleteCache() {
    await redisClient.flushAll();
}
//# sourceMappingURL=cache.service.js.map