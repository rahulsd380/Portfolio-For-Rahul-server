import { Schema, model } from "mongoose";
import { TEducation } from "./education.interface";

const educationSchema: Schema = new Schema<TEducation>(
  {
    instituteName: {
      type: String,
      required: [true, "Institute name is required"],
    },
    degree: {
      type: String,
      required: [true, "Degree is required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Education = model<TEducation>("Education", educationSchema);