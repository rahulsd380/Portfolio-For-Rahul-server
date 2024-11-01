import { Schema, model } from "mongoose";import { TAboutME } from "./aboutMe.interface";

const aboutMeSchema: Schema = new Schema<TAboutME>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    profileImg: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export const AboutMe = model<TAboutME>("AboutMe", aboutMeSchema);