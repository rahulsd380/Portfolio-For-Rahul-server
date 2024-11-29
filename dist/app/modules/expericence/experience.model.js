"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
    jobRole: {
        type: String,
        required: [true, "Job role is required"],
    },
    company: {
        type: String,
        required: [true, "Company name is required"],
    },
    jobTime: {
        type: String,
        required: [true, "Job time is required"],
    },
}, {
    timestamps: true,
});
exports.Experience = (0, mongoose_1.model)("Experience", experienceSchema);
