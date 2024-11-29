"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const mongoose_1 = require("mongoose");
const educationSchema = new mongoose_1.Schema({
    instituteName: {
        type: String,
        required: [true, "Institute name is required"],
    },
    degree: {
        type: String,
        required: [true, "Degree is required"],
    },
    duration: {
        type: String,
        required: [true, "Duration is required"],
    },
}, {
    timestamps: true,
});
exports.Education = (0, mongoose_1.model)("Education", educationSchema);
