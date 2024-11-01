/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TMyService } from "./myServices.interface";
import { MyService } from "./myServices.model";

// Create new service
const createService = async (payload: TMyService, file: any) => {
  // checking if the file is there or not
  if (file && file.path) {
    const imageName = `${payload?.name}`;
    const path = file.path;

    // Upload the image to Cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.icon = secure_url;
  }

  const result = await MyService.create(payload);
  return result;
};

// Get all services
const getAllServices = async () => {
  const result = await MyService.find();
  return result;
};

// Get single service
const getSingleServiceById = async (id: string) => {
  const result = await MyService.findById(id);
  return result;
};

const updateService = async (
  id: string,
  payload: Partial<TMyService>,
  profilePic: any
) => {
  let icon: string | undefined;

  if (profilePic) {
    const imageName = `${id}-service-${Date.now()}`;
    const path = profilePic.path;

    const { secure_url } = await sendImageToCloudinary(imageName, path);
    icon = secure_url;
  }

  if (icon) {
    payload.icon = icon;
  }

  const result = await MyService.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

// const deleteBike = async (id: string) => {
//   const result = await MyService.findByIdAndDelete(id);
//   return result;
// };

export const MyServices = {
  createService,
  getAllServices,
  getSingleServiceById,
  updateService,
};
