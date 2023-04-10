import { redisClient } from '../databases/redis/connect.js';

export async function createCache(cacheKey: string, cacheData: any) {
  try {
    const data = JSON.stringify(cacheData);
    await redisClient.set(cacheKey, data, { EX: 60, NX: true });
  } catch (err) {
    console.log(err);
  }
}
export async function readCache(cacheKey: string) {
  const result = await redisClient.get(cacheKey);

  return result;
}

export async function deleteCache() {
  await redisClient.flushAll();
}
