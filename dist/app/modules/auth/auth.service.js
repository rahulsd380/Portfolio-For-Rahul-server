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
exports.AuthServices = void 0;
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createToken_1 = require("../../utils/createToken");
const auth_model_1 = require("./auth.model");
const createPin = (pin) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_model_1.Pin.create({ pin });
    return result;
});
const loginWithPin = (pin) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the PIN is valid
    const isValidPin = yield auth_model_1.Pin.findOne({ pin });
    if (!isValidPin) {
        throw new AppError_1.default(403, "Invalid PIN");
    }
    // Create JWT payload with the PIN
    const jwtPayload = { pin };
    // Create the access token
    const accessToken = (0, createToken_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    return {
        accessToken,
    };
});
exports.AuthServices = {
    createPin,
    loginWithPin
};
