import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";

const ProjectSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
    },
    tagline: {
      type: String,
      required: [true, "Tagline is required"],
    },
    overview: {
      type: String,
      required: [true, "Overview is required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
    features: {
      type: [String],
      required: [true, "At least one feature is required"],
    },
    sourceCode: {
      type: String,
      required: [true, "Source code link is required"],
    },
    liveLink: {
      type: String,
      required: [true, "Live link is required"],
    },
    overviewVideo: {
      type: String,
    },
    images: {
      type: [String],
      required: [true, "At least one image is required"],
    },
    technologyNames: {
      type: [String],
      required: [true, "At least one image is required"],
    },
    technologyLogos: {
      type: [String],
      required: [true, "At least one image is required"],
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Full Stack"],
      required: [true, "Category is required"],
    },
    projectType: {
      type: String,
      enum: ["Personal", "Company"],
      required: [true, "Project type is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>("Project", ProjectSchema);
