import mongoose, { Schema } from 'mongoose';
export var DeveloperLevel;
(function (DeveloperLevel) {
    DeveloperLevel["JUNIOR"] = "junior";
    DeveloperLevel["SENIOR"] = "senior";
})(DeveloperLevel = DeveloperLevel || (DeveloperLevel = {}));
const DeveloperSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    level: { type: String, required: true, enum: Object.values(DeveloperLevel) },
});
export const DeveloperModel = mongoose.model('Developer', DeveloperSchema);
//# sourceMappingURL=Developer.js.map