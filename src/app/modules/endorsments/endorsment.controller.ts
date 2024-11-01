
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { EndorsementServices } from './endorsment.services';

const makeEndorsement = catchAsync(async (req, res) => {
  const file = req.file;
  const result = await EndorsementServices.createService(req.body, file);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Endorsement created successfully',
    data: result,
  });
});

const getAllEndorsements = catchAsync(async (req, res) => {
  const result = await EndorsementServices.getAllEndorsements();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Endorsements retrieved successfully',
    data: result,
  });
});

const getSingleEndorsementById = catchAsync(async (req, res) => {
  const {id} = req.params;
  const result = await EndorsementServices.getSingleEndorsementById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Endorsement fetched successfully.',
    data: result,
  });
})


const deleteEndorsement = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EndorsementServices.deleteEndorsement(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Endorsement deleted successfully",
    data: result,
  });
});

export const EndorsementControllers = {
  makeEndorsement,
  getAllEndorsements,
  getSingleEndorsementById,
  deleteEndorsement,
};
