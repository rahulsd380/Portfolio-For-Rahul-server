import { TEducation } from "./education.interface";
import { Education } from "./education.model";

const addNewDegree = async (payload: TEducation) => {
  const result = await Education.create(payload);
  return result;
};

const getAllDegrees = async () => {
  const result = await Education.find();
  return result;
};

const deleteDegree = async (id: string) => {
  const result = await Education.findByIdAndDelete(id);
  return result;
};

const updateDegree = async (id: string, payload: Partial<TEducation>) => {
  const result = await Education.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const EducationServices = {
  addNewDegree,
  getAllDegrees,
  deleteDegree,
  updateDegree,
};
