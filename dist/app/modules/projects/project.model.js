"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Project name is required"],
    },
    tagline: {
        type: String,
        required: [true, "Tagline is required"],
    },
    overview: {
        type: String,
        required: [true, "Overview is required"],
    },
    duration: {
        type: String,
        required: [true, "Duration is required"],
    },
    features: {
        type: [String],
        required: [true, "At least one feature is required"],
    },
    frontendRepo: {
        type: String,
        default: ""
    },
    backendRepo: {
        type: String,
        default: ""
    },
    liveLink: {
        type: String,
        required: [true, "Live link is required"],
    },
    overviewVideo: {
        type: String,
    },
    images: {
        type: [String],
        required: [true, "At least one image is required"],
    },
    technologyNames: {
        type: [String],
        required: [true, "At least one image is required"],
    },
    technologyLogos: {
        type: [String],
        required: [true, "At least one image is required"],
    },
    category: {
        type: String,
        enum: ["Frontend", "Backend", "Full Stack"],
        required: [true, "Category is required"],
    },
    projectType: {
        type: String,
        enum: ["Personal", "Company"],
        required: [true, "Project type is required"],
    },
}, {
    timestamps: true,
});
exports.Project = (0, mongoose_1.model)("Project", ProjectSchema);
