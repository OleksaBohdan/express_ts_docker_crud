import { DeveloperModel } from '../databases/mongo/models/Developer.js';
export async function create(developer) {
    try {
        return await DeveloperModel.create(developer);
    }
    catch (err) {
        throw err;
    }
}
export async function readAll() {
    try {
        return await DeveloperModel.find();
    }
    catch (err) {
        throw err;
    }
}
export async function readByLevel(level) {
    try {
        return await DeveloperModel.find({ level: level });
    }
    catch (err) {
        throw err;
    }
}
export async function readById(id) {
    try {
        return await DeveloperModel.findById(id);
    }
    catch (err) {
        throw err;
    }
}
export async function updateById(id, developer) {
    try {
        return await DeveloperModel.findByIdAndUpdate(id, developer, { new: true });
    }
    catch (err) {
        throw err;
    }
}
export async function deleteById(id) {
    try {
        return await DeveloperModel.findByIdAndDelete(id);
    }
    catch (err) {
        throw err;
    }
}
//# sourceMappingURL=developers.service.js.map