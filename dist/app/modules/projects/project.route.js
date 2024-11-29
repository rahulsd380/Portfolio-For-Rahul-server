"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_config_1 = require("../../config/multer.config");
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
router.post("/create-project", multer_config_1.multerUpload.fields([{ name: "images", maxCount: 20 }, { name: "logos", maxCount: 50 }]), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, project_controller_1.ProjectControllers.createProject);
router.get("/", project_controller_1.ProjectControllers.getAllProjects);
router.get("/:id", project_controller_1.ProjectControllers.getSingleProject);
router.put("/:id", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    var _a, _b;
    if ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.data) {
        req.body = JSON.parse((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.data);
    }
    next();
}, project_controller_1.ProjectControllers.updateProjectDetails);
exports.ProjectRoutes = router;
