/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TProfessionalSkill } from "./professionalSkills.interface";
import { ProfessionalSkill } from "./professionalSkills.model";

const addNewSkill = async (payload: TProfessionalSkill, file: any) => {
  // checking if the file is there or not
  if (file && file.path) {
    const imageName = `${payload.skillName}`;
    const path = file.path;

    // Upload the image to Cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.icon = secure_url;
  }

  const result = await ProfessionalSkill.create(payload);
  return result;
};

// Get all services
const getAllSkills = async () => {
  const result = await ProfessionalSkill.find();
  return result;
};

const deleteSkill = async (id: string) => {
  const result = await ProfessionalSkill.findByIdAndDelete(id);
  return result;
};

export const ProfessionalSkillServices = {
  addNewSkill,
  getAllSkills,
  deleteSkill,
};
