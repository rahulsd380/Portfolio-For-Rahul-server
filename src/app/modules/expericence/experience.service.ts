import { TExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const addNewExperience = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllExperiences = async () => {
  const result = await Experience.find();
  return result;
};

const deleteExperience = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);
  return result;
};

const updateExperience = async (id: string, payload: Partial<TExperience>) => {
  const result = await Experience.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const ExperienceServices = {
  addNewExperience,
  getAllExperiences,
  deleteExperience,
  updateExperience,
};
