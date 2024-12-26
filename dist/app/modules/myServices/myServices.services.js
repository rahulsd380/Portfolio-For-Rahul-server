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
exports.MyServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const myServices_model_1 = require("./myServices.model");
// Create new service
const createService = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    // checking if the file is there or not
    if (file && file.path) {
        const imageName = `${payload === null || payload === void 0 ? void 0 : payload.name}`;
        const path = file.path;
        // Upload the image to Cloudinary
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        payload.icon = secure_url;
    }
    const result = yield myServices_model_1.MyService.create(payload);
    return result;
});
// Get all services
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield myServices_model_1.MyService.find();
    return result;
});
// Get single service
const getSingleServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield myServices_model_1.MyService.findById(id);
    return result;
});
const updateService = (id, payload, profilePic) => __awaiter(void 0, void 0, void 0, function* () {
    let icon;
    if (profilePic) {
        const imageName = `${id}-service-${Date.now()}`;
        const path = profilePic.path;
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        icon = secure_url;
    }
    if (icon) {
        payload.icon = icon;
    }
    const result = yield myServices_model_1.MyService.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield myServices_model_1.MyService.findByIdAndDelete(id);
    return result;
});
exports.MyServices = {
    createService,
    getAllServices,
    getSingleServiceById,
    updateService,
    deleteService,
};
