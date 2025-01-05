/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TBlog } from "./blogs.interface";
import { Blog } from "./blogs.model";

const creteBlog = async (payload: TBlog, file: any) => {
  if (file && file.path) {
    const imageName = `${payload.title}`;
    const path = file.path;

    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.image = secure_url;
  }

  const result = await Blog.create(payload);
  return result;
};

const getAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const updateBlog = async (id: string, payload: TBlog) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const BlogServices = {
  creteBlog,
  getAllBlogs,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};
