"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutMeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_config_1 = require("../../config/multer.config");
const aboutMe_controller_1 = require("./aboutMe.controller");
const router = express_1.default.Router();
router.post("/add-details", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, aboutMe_controller_1.AboutMeControllers.addAboutMeDetails);
router.get("/", aboutMe_controller_1.AboutMeControllers.getAboutMeDetails);
router.put("/:id", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    var _a, _b;
    if ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.data) {
        req.body = JSON.parse((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.data);
    }
    next();
}, aboutMe_controller_1.AboutMeControllers.updateAboutMeDetails);
exports.AboutMeRoutes = router;
