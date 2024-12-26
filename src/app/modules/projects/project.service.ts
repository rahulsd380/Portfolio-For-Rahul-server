/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TProject } from "./project.interface";
import { Project } from "./project.model";

const addProject = async (payload: TProject, images: any[], logos: any[]) => {
  const { name, tagline, overview, duration, features,frontendRepo, backendRepo, liveLink, overviewVideo, technologyNames, category, projectType } = payload;

  const imageUrls: string[] = [];
  const logoUrls: string[] = [];

  // Upload project images
  for (const image of images) {
    const imageName = `${payload?.name}-${Date.now()}`;
    const path = image.path;
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    imageUrls.push(secure_url);
  }

  // Upload technology logos
  for (const logo of logos) {
    const logoName = `${payload?.name}-${Date.now()}`;
    const path = logo.path;
    const { secure_url } = await sendImageToCloudinary(logoName, path);
    logoUrls.push(secure_url);
  }

  const payloadData = {
    name: name || "",
    tagline: tagline || "",
    overview: overview || "",
    duration: duration || "",
    features: features || [],
    frontendRepo: frontendRepo || "",
    backendRepo: backendRepo || "",
    liveLink: liveLink || "",
    overviewVideo: overviewVideo || "",
    images: imageUrls.length > 0 ? imageUrls : [],
    technologyNames: technologyNames || [],
    technologyLogos: logoUrls || [],
    category: category || "",
    projectType: projectType || "",
  };


  const result = await Project.create(payloadData);
  return result;
};


// Get all projects
const getAllProjects = async () => {
  const result = await Project.find();
  return result;
};


const getSingleProject = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};


const updateProjectDetails = async (
  id: string,
  payload: Partial<TProject>,
) => {

  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const ProjectServices = {
  addProject,
  getAllProjects,
  getSingleProject,
  updateProjectDetails,
};