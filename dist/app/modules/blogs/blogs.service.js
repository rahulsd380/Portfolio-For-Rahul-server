"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const blogs_model_1 = require("./blogs.model");
const creteBlog = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (file && file.path) {
        const imageName = `${payload.title}`;
        const path = file.path;
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        payload.image = secure_url;
    }
    const result = yield blogs_model_1.Blog.create(payload);
    return result;
});
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.Blog.find();
    return result;
});
const getSingleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.Blog.findById(id);
    return result;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.Blog.findByIdAndDelete(id);
    return result;
});
const updateBlog = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.Blog.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.BlogServices = {
    creteBlog,
    getAllBlogs,
    getSingleBlog,
    deleteBlog,
    updateBlog,
};
