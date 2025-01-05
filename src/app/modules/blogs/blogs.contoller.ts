import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { BlogServices } from './blogs.service';

const createBlog = catchAsync(async (req, res) => {
    const file = req.file;
    const result = await BlogServices.creteBlog(req.body, file);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Blog created successfully',
        data: result,
    });
});

const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogs();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blogs retrieved successfully',
        data: result,
    });
});

const getSingleBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.getSingleBlog(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog retrieved successfully',
        data: result,
    });
});

const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.deleteBlog(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog deleted successfully',
        data: result,
    });
});

const updateBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogServices.updateBlog(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog updated successfully',
        data: result,
    });
});

export const BlogControllers = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    deleteBlog,
    updateBlog,
};
