
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const images = files?.images || [];
  const logos = files?.logos || [];

  const result = await ProjectServices.addProject(req.body, images, logos);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project added successfully",
    data: result,
  });
});



const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjects();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects retrieved successfully',
    data: result,
  });
});


const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.getSingleProject(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project fetched successfully.',
    data: result,
  });
})


const updateProjectDetails = catchAsync(async (req, res) => {
  // const profileImg = req.file;
  const { id } = req.params;
  const result = await ProjectServices.updateProjectDetails(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Details updated successfully",
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProjectDetails,
};
