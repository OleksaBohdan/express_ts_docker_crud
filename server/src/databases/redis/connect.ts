import { createClient } from 'redis';
import { REDIS_URL } from '../../configs/app.config.js';

export const redisClient = createClient(REDIS_URL);
redisClient.on('connect', () => console.log(`Redis connected to ${REDIS_URL}`));
redisClient.on('error', () => redisClient.disconnect());
