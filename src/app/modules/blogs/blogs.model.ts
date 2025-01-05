import { Schema, model } from "mongoose";
import { TBlog } from "./blogs.interface";

const BlogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<TBlog>("Blog", BlogSchema);
