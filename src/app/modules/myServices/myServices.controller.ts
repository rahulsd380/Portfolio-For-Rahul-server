
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { MyServices } from './myServices.services';

const createService = catchAsync(async (req, res) => {
  const file = req.file;
  const result = await MyServices.createService(req.body, file);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service created successfully',
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await MyServices.getAllServices();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services retrieved successfully',
    data: result,
  });
});

const getSingleServiceById = catchAsync(async (req, res) => {
  const {id} = req.params;
  const result = await MyServices.getSingleServiceById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service fetched successfully.',
    data: result,
  });
})


// const updateBike= catchAsync(async (req, res) => {
//   const {id} = req.params;
//   const result = await BikeServices.updateBike(id, req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Bike updated successfully",
//     data: result,
//   });
// });

// const deleteBike = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await BikeServices.deleteBike(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Bike deleted successfully",
//     data: result,
//   });
// });

export const MyServiceControllers = {
  createService,
  getAllServices,
  getSingleServiceById,
};
