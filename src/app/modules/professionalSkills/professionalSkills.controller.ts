
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import {ProfessionalSkillServices } from './professionalSkills.service';

const addNewSkill = catchAsync(async (req, res) => {
  const file = req.file;
  console.log(file)
    const result = await ProfessionalSkillServices.addNewSkill(req.body, file);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Skill created successfully',
      data: result,
    });
  });


const getAllSkills = catchAsync(async (req, res) => {
  const result = await ProfessionalSkillServices.getAllSkills();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills retrieved successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProfessionalSkillServices.deleteSkill(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill deleted successfully",
    data: result,
  });
});


export const ProfessionalSkillControllers = {
  addNewSkill,
  getAllSkills,
  deleteSkill,
};
