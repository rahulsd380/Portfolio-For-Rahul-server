/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TMyService } from "./myServices.interface";
import { MyService } from "./myServices.model";

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


// const getAllBikes = async () => {
//   const result = await MyService.find();
//   return result;
// };

// const getSingleBikeById = async (bikeId: string) => {
//   const result = await MyService.findById(bikeId);
//   return result;
// };

// const updateBike = async (id : string, payload : Partial<TMyService>) => {
//   const result = await Bike.findByIdAndUpdate(id, payload, {
//     new: true,
//     runValidators: true,
//   });
//   return result;
// };

// const deleteBike = async (id: string) => {
//   const result = await MyService.findByIdAndDelete(id);
//   return result;
// };

export const MyServices = {
  createService,
  // getAllBikes,
  // updateBike,
  // deleteBike,
  // getSingleBikeById,
};