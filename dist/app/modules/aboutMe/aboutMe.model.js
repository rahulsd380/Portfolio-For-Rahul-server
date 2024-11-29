"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutMe = void 0;
const mongoose_1 = require("mongoose");
const aboutMeSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    profileImg: {
        type: String,
    }
}, {
    timestamps: true,
});
exports.AboutMe = (0, mongoose_1.model)("AboutMe", aboutMeSchema);
