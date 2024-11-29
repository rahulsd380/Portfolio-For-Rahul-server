"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const experience_controller_1 = require("./experience.controller");
const multer_config_1 = require("../../config/multer.config");
const router = express_1.default.Router();
router.post("/add-experience", multer_config_1.multerUpload.none(), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, experience_controller_1.ExperienceControllers.addNewExperience);
router.get("/", experience_controller_1.ExperienceControllers.getAllExperiences);
router.delete("/:id", experience_controller_1.ExperienceControllers.deleteExperience);
router.put("/:id", multer_config_1.multerUpload.none(), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, experience_controller_1.ExperienceControllers.updateExperience);
exports.ExperienceRoutes = router;
