import { Schema, model } from "mongoose";
import { TProfessionalSkill } from "./professionalSkills.interface";

const professionalSkillSchema: Schema = new Schema<TProfessionalSkill>(
  {
    skillName: {
      type: String,
      required: [true, "Skill name is required"],
    },
    icon: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const ProfessionalSkill = model<TProfessionalSkill>(
  "ProfessionalSkill",
  professionalSkillSchema
);
