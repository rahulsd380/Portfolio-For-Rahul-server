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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFoundHandeler_1 = __importDefault(require("./app/middlewares/notFoundHandeler"));
const globalErrorHandeler_1 = __importDefault(require("./app/middlewares/globalErrorHandeler"));
const app = (0, express_1.default)();
// Enable cookie parsing
app.use((0, cookie_parser_1.default)());
// Middleware for parsing JSON bodies
app.use(express_1.default.json());
// Middleware for handling CORS with credentials
app.use((0, cors_1.default)({ origin: ['https://portfolio-rahul-admin.vercel.app/', 'https://developer-rahul.vercel.app/', 'http://localhost:5173', 'http://localhost:5174'], credentials: true }));
// Root route
app.get('/', (req, res) => {
    res.send("Welcome to bike rental");
});
// Application routes
app.use('/api/v1', routes_1.default);
// Catch-all route for handling 404 errors
app.use(notFoundHandeler_1.default);
// Global error handling middleware
app.use(globalErrorHandeler_1.default);
app.post("/api/v1/services", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Handle your logic
        res.status(200).json({ message: "Success" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
exports.default = app;
