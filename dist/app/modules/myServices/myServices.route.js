"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const myServices_controller_1 = require("./myServices.controller");
const multer_config_1 = require("../../config/multer.config");
const router = express_1.default.Router();
router.post("/create-service", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, myServices_controller_1.MyServiceControllers.createService);
router.get("/", myServices_controller_1.MyServiceControllers.getAllServices);
router.get("/:id", myServices_controller_1.MyServiceControllers.getSingleServiceById);
router.put("/update-service/:id", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    var _a, _b;
    if ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.data) {
        req.body = JSON.parse((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.data);
    }
    next();
}, myServices_controller_1.MyServiceControllers.updateService);
router.delete("/:id", myServices_controller_1.MyServiceControllers.deleteService);
exports.MyServiceRoutes = router;
