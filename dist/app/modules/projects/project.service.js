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
exports.ProjectServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const project_model_1 = require("./project.model");
const addProject = (payload, images, logos) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, tagline, overview, duration, features, frontendRepo, backendRepo, liveLink, overviewVideo, technologyNames, category, projectType } = payload;
    const imageUrls = [];
    const logoUrls = [];
    // Upload project images
    for (const image of images) {
        const imageName = `${payload === null || payload === void 0 ? void 0 : payload.name}-${Date.now()}`;
        const path = image.path;
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        imageUrls.push(secure_url);
    }
    // Upload technology logos
    for (const logo of logos) {
        const logoName = `${payload === null || payload === void 0 ? void 0 : payload.name}-${Date.now()}`;
        const path = logo.path;
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(logoName, path);
        logoUrls.push(secure_url);
    }
    const payloadData = {
        name: name || "",
        tagline: tagline || "",
        overview: overview || "",
        duration: duration || "",
        features: features || [],
        frontendRepo: frontendRepo || "",
        backendRepo: backendRepo || "",
        liveLink: liveLink || "",
        overviewVideo: overviewVideo || "",
        images: imageUrls.length > 0 ? imageUrls : [],
        technologyNames: technologyNames || [],
        technologyLogos: logoUrls || [],
        category: category || "",
        projectType: projectType || "",
    };
    const result = yield project_model_1.Project.create(payloadData);
    return result;
});
// Get all projects
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.find();
    return result;
});
const getSingleProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findById(id);
    return result;
});
const updateProjectDetails = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.ProjectServices = {
    addProject,
    getAllProjects,
    getSingleProject,
    updateProjectDetails,
};
