"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endorsement = void 0;
const mongoose_1 = require("mongoose");
const endorsementSchema = new mongoose_1.Schema({
    authorImg: {
        type: String
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    occupation: {
        type: String,
        required: [true, "Occupation is required"],
    },
    feedback: {
        type: String,
        required: [true, "Feedback is required"],
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
    }
}, {
    timestamps: true,
});
exports.Endorsement = (0, mongoose_1.model)("Endorsement", endorsementSchema);
