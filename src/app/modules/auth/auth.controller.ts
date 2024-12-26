import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import config from "../../config";
import { AuthServices } from "./auth.service";

const createPin = catchAsync(async (req: Request, res: Response) => {
  const { pin } = req.body; 
  const result = await AuthServices.createPin(pin);
  return res.status(200).json({
    success: true,
    message: "Pin created successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { pin } = req.body;
  const result = await AuthServices.loginWithPin(pin);

  res.cookie("accessToken", result.accessToken, {
    secure: config.node_env === "production",
    httpOnly: true,
  });

  return res.status(200).json({
    success: true,
    message: "Logged in successfully",
    data: {
      accessToken: result.accessToken,
    },
  });
});

export const AuthController = {
    loginUser,
    createPin
};
