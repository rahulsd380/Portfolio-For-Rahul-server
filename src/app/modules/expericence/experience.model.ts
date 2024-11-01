import { Schema, model } from "mongoose";
import { TExperience } from "./experience.interface";

const experienceSchema: Schema = new Schema<TExperience>(
  {
    jobRole: {
      type: String,
      required: [true, "Job role is required"],
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
    },
    jobTime: {
      type: String,
      required: [true, "Job time is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Experience = model<TExperience>("Experience", experienceSchema);
