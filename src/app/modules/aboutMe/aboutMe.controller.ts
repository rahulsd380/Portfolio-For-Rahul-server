
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AboutMeServices } from './aboutMe.service';

const addAboutMeDetails = catchAsync(async (req, res) => {
    const file = req.file;
    const result = await AboutMeServices.addAboutMeDetails(req.body, file);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Details created successfully',
      data: result,
    });
  });


const getAboutMeDetails = catchAsync(async (req, res) => {
  const result = await AboutMeServices.getAllServices();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services retrieved successfully',
    data: result,
  });
});


const updateAboutMeDetails = catchAsync(async (req, res) => {
  const profileImg = req.file;
  const {id} = req.params;
  const result = await AboutMeServices.updateAboutMeDetails(id, req.body, profileImg);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Details updated successfully",
    data: result,
  });
});

export const AboutMeControllers = {
    addAboutMeDetails,
  getAboutMeDetails,
  updateAboutMeDetails,
};
