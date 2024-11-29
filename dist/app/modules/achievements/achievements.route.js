"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_config_1 = require("../../config/multer.config");
const achievements_controller_1 = require("./achievements.controller");
const router = express_1.default.Router();
router.post("/add-achievement", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, achievements_controller_1.AchievementControllers.addNewAchievement);
router.get("/", achievements_controller_1.AchievementControllers.getAllAchievements);
router.delete("/:id", achievements_controller_1.AchievementControllers.deleteAchievement);
exports.AchievementRoutes = router;
