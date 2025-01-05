import config from "../../config";
import AppError from "../../errors/AppError";
import { createToken } from "../../utils/createToken";
import { Pin } from "./auth.model";

const createPin = async (pin: string) => {
  const result = await Pin.create({ pin });
  return result;
};

const loginWithPin = async (pin: string) => {
  // Check if the PIN is valid
  const isValidPin = await Pin.findOne({pin});

  if (!isValidPin) {
    throw new AppError(403, "Invalid PIN");
  }

  // Create JWT payload with the PIN
  const jwtPayload = { pin };

  // Create the access token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
    createPin,
    loginWithPin
};
