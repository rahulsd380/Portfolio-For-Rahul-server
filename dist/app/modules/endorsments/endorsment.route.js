"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndorsementRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_config_1 = require("../../config/multer.config");
const endorsment_controller_1 = require("./endorsment.controller");
const router = express_1.default.Router();
router.post("/make-endorsement", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, endorsment_controller_1.EndorsementControllers.makeEndorsement);
router.get("/", endorsment_controller_1.EndorsementControllers.getAllEndorsements);
router.get("/:id", endorsment_controller_1.EndorsementControllers.getSingleEndorsementById);
router.delete("/:id", endorsment_controller_1.EndorsementControllers.deleteEndorsement);
exports.EndorsementRoutes = router;
