"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    content: {
        type: String,
        required: [true, "Content is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
        required: [true, "Author name is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
}, {
    timestamps: true,
});
exports.Blog = (0, mongoose_1.model)("Blog", BlogSchema);
