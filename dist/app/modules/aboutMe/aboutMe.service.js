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
exports.AboutMeServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const aboutMe_model_1 = require("./aboutMe.model");
const addAboutMeDetails = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    // checking if the file is there or not
    if (file && file.path) {
        const imageName = `Rahul Sutradhar`;
        const path = file.path;
        // Upload the image to Cloudinary
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        payload.profileImg = secure_url;
    }
    const result = yield aboutMe_model_1.AboutMe.create(payload);
    return result;
});
// Get all services
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboutMe_model_1.AboutMe.find();
    return result;
});
const updateAboutMeDetails = (id, payload, profilePic) => __awaiter(void 0, void 0, void 0, function* () {
    let profileImg;
    if (profilePic) {
        const imageName = `${Date.now()}`;
        const path = profilePic.path;
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        profileImg = secure_url;
    }
    if (profileImg) {
        payload.profileImg = profileImg;
    }
    const result = yield aboutMe_model_1.AboutMe.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.AboutMeServices = {
    addAboutMeDetails,
    getAllServices,
    updateAboutMeDetails,
};
