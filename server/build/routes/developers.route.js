import { Router } from 'express';
import { createDeveloper, readDevelopers, readDevelopersByLevel, readDeveloperById, updateDeveloperById, deleteDeveloperById, } from '../controllers/developers.controller.js';
import { getCache, clearAllCache } from '../middlewares/cache.middleware.js';
export const router = Router();
router.post('/developer', clearAllCache, createDeveloper);
router.get('/developers', getCache, readDevelopers);
router.get('/developers/:level', getCache, readDevelopersByLevel);
router.get('/developer/:id', getCache, readDeveloperById);
router.put('/developer/:id', clearAllCache, updateDeveloperById);
router.delete('/developer/:id', clearAllCache, deleteDeveloperById);
//# sourceMappingURL=developers.route.js.map