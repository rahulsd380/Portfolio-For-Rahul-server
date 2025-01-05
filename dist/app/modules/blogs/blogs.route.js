"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const multer_config_1 = require("../../config/multer.config");
const blogs_contoller_1 = require("./blogs.contoller");
const router = express_1.default.Router();
router.post("/create", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, blogs_contoller_1.BlogControllers.createBlog);
router.get("/", blogs_contoller_1.BlogControllers.getAllBlogs);
router.get("/:id", blogs_contoller_1.BlogControllers.getSingleBlog);
router.delete("/:id", blogs_contoller_1.BlogControllers.deleteBlog);
router.put("/:id", multer_config_1.multerUpload.single("file"), (req, res, next) => {
    var _a, _b;
    if ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.data) {
        req.body = JSON.parse((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.data);
    }
    next();
}, blogs_contoller_1.BlogControllers.updateBlog);
exports.BlogRoutes = router;
