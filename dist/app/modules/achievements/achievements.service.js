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
exports.AchievementServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const achievements_model_1 = require("./achievements.model");
const addNewAchievement = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (file && file.path) {
        const imageName = `${payload.name}`;
        const path = file.path;
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        payload.image = secure_url; // Update the `image` field with Cloudinary URL
    }
    const result = yield achievements_model_1.Achievement.create(payload);
    return result;
});
const getAllAchievements = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield achievements_model_1.Achievement.find();
    return result;
});
const deleteAchievement = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield achievements_model_1.Achievement.findByIdAndDelete(id);
    return result;
});
exports.AchievementServices = {
    addNewAchievement,
    getAllAchievements,
    deleteAchievement,
};
