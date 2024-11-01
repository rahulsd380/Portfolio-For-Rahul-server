import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AchievementServices } from './achievements.service';

const addNewAchievement = catchAsync(async (req, res) => {
  const file = req.file;
  const result = await AchievementServices.addNewAchievement(req.body, file);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Achievement created successfully',
    data: result,
  });
});

const getAllAchievements = catchAsync(async (req, res) => {
  const result = await AchievementServices.getAllAchievements();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Achievements retrieved successfully',
    data: result,
  });
});

const deleteAchievement = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AchievementServices.deleteAchievement(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Achievement deleted successfully",
    data: result,
  });
});

export const AchievementControllers = {
  addNewAchievement,
  getAllAchievements,
  deleteAchievement,
};
