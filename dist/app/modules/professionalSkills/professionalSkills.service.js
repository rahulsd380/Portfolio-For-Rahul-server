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
exports.ProfessionalSkillServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const professionalSkills_model_1 = require("./professionalSkills.model");
const addNewSkill = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    // checking if the file is there or not
    if (file && file.path) {
        const imageName = `${payload.skillName}`;
        const path = file.path;
        // Upload the image to Cloudinary
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        payload.icon = secure_url;
    }
    const result = yield professionalSkills_model_1.ProfessionalSkill.create(payload);
    return result;
});
// Get all services
const getAllSkills = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield professionalSkills_model_1.ProfessionalSkill.find();
    return result;
});
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield professionalSkills_model_1.ProfessionalSkill.findByIdAndDelete(id);
    return result;
});
exports.ProfessionalSkillServices = {
    addNewSkill,
    getAllSkills,
    deleteSkill,
};
