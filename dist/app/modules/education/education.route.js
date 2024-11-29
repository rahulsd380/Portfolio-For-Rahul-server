"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const education_controller_1 = require("./education.controller");
const multer_config_1 = require("../../config/multer.config");
const router = express_1.default.Router();
router.post("/add-degree", multer_config_1.multerUpload.none(), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, education_controller_1.EducationControllers.addNewDegree);
router.get("/", education_controller_1.EducationControllers.getAllDegrees);
router.delete("/:id", education_controller_1.EducationControllers.deleteDegree);
router.put("/:id", multer_config_1.multerUpload.none(), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, education_controller_1.EducationControllers.updateDegree);
exports.EducationRoutes = router;
