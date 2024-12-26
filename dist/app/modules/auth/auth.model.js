"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pin = void 0;
const mongoose_1 = require("mongoose");
// Define the Pin schema
const pinSchema = new mongoose_1.Schema({
    pin: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });
// Create the Pin model
exports.Pin = (0, mongoose_1.model)("Pin", pinSchema);
