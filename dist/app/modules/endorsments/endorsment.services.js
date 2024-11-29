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
exports.EndorsementServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const endorsment_model_1 = require("./endorsment.model");
// Create new service
const createService = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    // checking if the file is there or not
    if (file && file.path) {
        const imageName = `${payload === null || payload === void 0 ? void 0 : payload.name}`;
        const path = file.path;
        // Upload the image to Cloudinary
        const { secure_url } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(imageName, path);
        payload.authorImg = secure_url;
    }
    const result = yield endorsment_model_1.Endorsement.create(payload);
    return result;
});
// Get all services
const getAllEndorsements = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield endorsment_model_1.Endorsement.find();
    return result;
});
// Get single service
const getSingleEndorsementById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield endorsment_model_1.Endorsement.findById(id);
    return result;
});
const deleteEndorsement = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield endorsment_model_1.Endorsement.findByIdAndDelete(id);
    return result;
});
exports.EndorsementServices = {
    createService,
    getAllEndorsements,
    getSingleEndorsementById,
    deleteEndorsement,
};
