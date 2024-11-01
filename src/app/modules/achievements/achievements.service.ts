/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TAchievement } from "./achievements.interface";
import { Achievement } from "./achievements.model";

const addNewAchievement = async (payload: TAchievement, file: any) => {
  if (file && file.path) {
    const imageName = `${payload.name}`;
    const path = file.path;

    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.image = secure_url; // Update the `image` field with Cloudinary URL
  }

  const result = await Achievement.create(payload);
  return result;
};

const getAllAchievements = async () => {
  const result = await Achievement.find();
  return result;
};

const deleteAchievement = async (id: string) => {
  const result = await Achievement.findByIdAndDelete(id);
  return result;
};

export const AchievementServices = {
  addNewAchievement,
  getAllAchievements,
  deleteAchievement,
};
