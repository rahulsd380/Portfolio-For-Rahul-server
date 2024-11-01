
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

// const getAllBikes = catchAsync(async (req, res) => {
//   const result = await BikeServices.getAllBikes();

//   if(result.length === 0 || result.length === undefined){
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: false,
//       message: "No data found.",
//       data: result,
//     });
//   }

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Bikes retrieved successfully',
//     data: result,
//   });
// });

// const getSingleBikeById = catchAsync(async (req, res) => {
//   const {bikeId} = req.params;
//   const result = await BikeServices.getSingleBikeById(bikeId);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Bike fetched successfully.',
//     data: result,
//   });
// })


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
};
