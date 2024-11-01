import { Schema, model } from "mongoose";
import { TAchievement } from "./achievements.interface";

const achievementSchema: Schema = new Schema<TAchievement>(
  {
    name: {
      type: String,
      required: [true, "Achievement name is required"],
    },
    image: {
      type: String,
      required: [true, "Achievement image is required"],
    },
    organization: {
      type: String,
      required: [true, "Organization is required"],
    },
    completedAt: {
      type: String,
      required: [true, "Completion date is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Achievement = model<TAchievement>("Achievement", achievementSchema);
