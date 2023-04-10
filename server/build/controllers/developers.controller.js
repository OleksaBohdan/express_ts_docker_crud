import { create, readAll, readByLevel, readById, updateById, deleteById } from '../services/developers.service.js';
import { DeveloperLevel } from '../databases/mongo/models/Developer.js';
import { createCache } from '../services/cache.service.js';
export async function createDeveloper(req, res, next) {
    try {
        res.status(201).json(await create(req.body));
    }
    catch (err) {
        next(err);
    }
}
export async function readDevelopers(req, res, next) {
    try {
        const developers = await readAll();
        res.json(developers);
        await createCache(req.originalUrl, developers);
    }
    catch (err) {
        next(err);
    }
}
export async function readDevelopersByLevel(req, res, next) {
    const level = req.params.level;
    const validLevels = Object.values(DeveloperLevel);
    if (validLevels.includes(level)) {
        const developerLevel = level;
        try {
            const developers = await readByLevel(developerLevel);
            res.json(developers);
            await createCache(req.originalUrl, developers);
        }
        catch (err) {
            next(err);
        }
    }
    else {
        res.status(400).json({ error: 'Invalid developer level' });
    }
}
export async function readDeveloperById(req, res, next) {
    const id = req.params.id;
    try {
        const developer = await readById(id);
        if (developer != null) {
            res.json(developer);
            await createCache(req.originalUrl, developer);
        }
        else {
            res.status(404).json({ error: 'Developer not found' });
        }
    }
    catch (err) {
        next(err);
    }
}
export async function updateDeveloperById(req, res, next) {
    const id = req.params.id;
    const update = req.body;
    try {
        const developer = await updateById(id, update);
        if (developer != null) {
            res.json(developer);
        }
        else {
            res.status(404).json({ error: 'Developer not found' });
        }
    }
    catch (err) {
        next(err);
    }
}
export async function deleteDeveloperById(req, res, next) {
    const id = req.params.id;
    try {
        const developer = await deleteById(id);
        if (developer != null) {
            res.status(200).json(developer);
        }
        else {
            res.status(404).json({ error: 'Developer not found' });
        }
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=developers.controller.js.map