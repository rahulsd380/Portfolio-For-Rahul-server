
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

const updateService = catchAsync(async (req, res) => {
  const icon = req.file;
  const {id} = req.params;
  const result = await MyServices.updateService(id, req.body, icon);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated successfully",
    data: result,
  });
});


const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await MyServices.deleteService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service deleted successfully",
    data: result,
  });
});

export const MyServiceControllers = {
  createService,
  getAllServices,
  getSingleServiceById,
  updateService,
  deleteService,
};
