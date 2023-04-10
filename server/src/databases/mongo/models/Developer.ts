import mongoose, { Document, Schema } from 'mongoose';

export enum DeveloperLevel {
  JUNIOR = 'junior',
  SENIOR = 'senior',
}

export interface IDeveloper extends Document {
  name: string;
  email: string;
  level: DeveloperLevel;
}

const DeveloperSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  level: { type: String, required: true, enum: Object.values(DeveloperLevel) },
});

export const DeveloperModel = mongoose.model<IDeveloper>('Developer', DeveloperSchema);
