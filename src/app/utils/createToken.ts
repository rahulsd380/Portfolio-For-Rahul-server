import jwt from "jsonwebtoken";

// Function to create a JWT token
export const createToken = (
  payload: object,
  secret: string,
  expiresIn: string
): string => {
  return jwt.sign(payload, secret, { expiresIn });
};
