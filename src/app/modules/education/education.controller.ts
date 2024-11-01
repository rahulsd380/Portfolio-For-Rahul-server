import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { EducationServices } from './education.service';

const addNewDegree = catchAsync(async (req, res) => {
  const result = await EducationServices.addNewDegree(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Degree added successfully',
    data: result,
  });
});

const getAllDegrees = catchAsync(async (req, res) => {
  const result = await EducationServices.getAllDegrees();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Degrees retrieved successfully',
    data: result,
  });
});

const deleteDegree = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EducationServices.deleteDegree(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Degree deleted successfully',
    data: result,
  });
});

const updateDegree = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EducationServices.updateDegree(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Degree updated successfully',
    data: result,
  });
});

export const EducationControllers = {
  addNewDegree,
  getAllDegrees,
  deleteDegree,
  updateDegree,
};
