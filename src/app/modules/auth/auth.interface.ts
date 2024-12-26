import { Model } from "mongoose";

// Define the TypeScript type for the Pin schema
export type TAuth = {
  pin: string;
};

// Extend the Mongoose Model interface to include the static method
export interface PinModel extends Model<TAuth> {
  isPinValid(pin: string): Promise<boolean>;
}
