import { DeveloperModel, DeveloperLevel, IDeveloper } from '../databases/mongo/models/Developer.js';

export async function create(developer: IDeveloper): Promise<IDeveloper> {
  try {
    return await DeveloperModel.create(developer);
  } catch (err) {
    throw err;
  }
}

export async function readAll(): Promise<IDeveloper[]> {
  try {
    return await DeveloperModel.find();
  } catch (err) {
    throw err;
  }
}

export async function readByLevel(level: DeveloperLevel): Promise<IDeveloper[]> {
  try {
    return await DeveloperModel.find({ level: level });
  } catch (err) {
    throw err;
  }
}

export async function readById(id: string): Promise<IDeveloper | null> {
  try {
    return await DeveloperModel.findById(id);
  } catch (err) {
    throw err;
  }
}

export async function updateById(id: string, developer: IDeveloper): Promise<IDeveloper | null> {
  try {
    return await DeveloperModel.findByIdAndUpdate(id, developer, { new: true });
  } catch (err) {
    throw err;
  }
}

export async function deleteById(id: string): Promise<IDeveloper | null> {
  try {
    return await DeveloperModel.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
}
