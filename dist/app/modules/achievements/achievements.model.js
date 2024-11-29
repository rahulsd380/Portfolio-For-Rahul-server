"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Achievement = void 0;
const mongoose_1 = require("mongoose");
const achievementSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Achievement name is required"],
    },
    image: {
        type: String,
        required: [true, "Achievement image is required"],
    },
    organization: {
        type: String,
        required: [true, "Organization is required"],
    },
    completedAt: {
        type: String,
        required: [true, "Completion date is required"],
    },
}, {
    timestamps: true,
});
exports.Achievement = (0, mongoose_1.model)("Achievement", achievementSchema);
