"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyService = void 0;
const mongoose_1 = require("mongoose");
const myServiceSchema = new mongoose_1.Schema({
    icon: {
        type: String
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    }
}, {
    timestamps: true,
});
exports.MyService = (0, mongoose_1.model)("MyService", myServiceSchema);
