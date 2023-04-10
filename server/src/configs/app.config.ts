export const PORT: number = parseInt(process.env.PORT || '5000', 10);
export const MONGODB_URL: string = process.env.MONGODB_URL || 'mongodb://localhost:27017/dev_developers';
export const REDIS_HOST: string = process.env.REDIS_HOST || 'localhost';
export const REDIS_PORT: string | number = process.env.REDIS_PORT || 6379;
