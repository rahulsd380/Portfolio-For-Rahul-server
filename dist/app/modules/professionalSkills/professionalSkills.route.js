"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalSkillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_config_1 = require("../../config/multer.config");
const professionalSkills_controller_1 = require("./professionalSkills.controller");
const router = express_1.default.Router();
router.post("/add-skill", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, professionalSkills_controller_1.ProfessionalSkillControllers.addNewSkill);
router.get("/", professionalSkills_controller_1.ProfessionalSkillControllers.getAllSkills);
router.delete("/:id", professionalSkills_controller_1.ProfessionalSkillControllers.deleteSkill);
exports.ProfessionalSkillRoutes = router;
