/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TAboutME } from "./aboutMe.interface";
import { AboutMe } from "./aboutMe.model";

const addAboutMeDetails = async (payload: TAboutME, file: any) => {
  // checking if the file is there or not
  if (file && file.path) {
    const imageName = `Rahul Sutradhar`;
    const path = file.path;

    // Upload the image to Cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    payload.profileImg = secure_url;
  }

  const result = await AboutMe.create(payload);
  return result;
};

// Get all services
const getAllServices = async () => {
  const result = await AboutMe.find();
  return result;
};

const updateAboutMeDetails = async (
    id:string,
  payload: Partial<TAboutME>,
  profilePic: any
) => {
  let profileImg: string | undefined;

  if (profilePic) {
    const imageName = `${Date.now()}`;
    const path = profilePic.path;

    const { secure_url } = await sendImageToCloudinary(imageName, path);
    profileImg = secure_url;
  }

  if (profileImg) {
    payload.profileImg = profileImg;
  }

  const result = await AboutMe.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const AboutMeServices = {
  addAboutMeDetails,
  getAllServices,
  updateAboutMeDetails,
};
