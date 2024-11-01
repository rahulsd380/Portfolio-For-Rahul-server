/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TEndorsement } from "./endorsment.interface";
import { Endorsement } from "./endorsment.model";

// Create new service
const createService = async (payload: TEndorsement, file: any) => {
  // checking if the file is there or not
  if (file && file.path) {
    const imageName = `${payload?.name}`;
    const path = file.path;

    // Upload the image to Cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.authorImg = secure_url;
  }

  const result = await Endorsement.create(payload);
  return result;
};

// Get all services
const getAllEndorsements = async () => {
  const result = await Endorsement.find();
  return result;
};

// Get single service
const getSingleEndorsementById = async (id: string) => {
  const result = await Endorsement.findById(id);
  return result;
};


const deleteEndorsement = async (id: string) => {
  const result = await Endorsement.findByIdAndDelete(id);
  return result;
};

export const EndorsementServices = {
  createService,
  getAllEndorsements,
  getSingleEndorsementById,
  deleteEndorsement,
};
