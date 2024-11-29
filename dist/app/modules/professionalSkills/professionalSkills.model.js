"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalSkill = void 0;
const mongoose_1 = require("mongoose");
const professionalSkillSchema = new mongoose_1.Schema({
    skillName: {
        type: String,
        required: [true, "Skill name is required"],
    },
    icon: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.ProfessionalSkill = (0, mongoose_1.model)("ProfessionalSkill", professionalSkillSchema);
