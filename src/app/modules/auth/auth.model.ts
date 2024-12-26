import { Schema, model } from "mongoose";
import { TAuth, PinModel } from "./auth.interface";

// Define the Pin schema
const pinSchema = new Schema<TAuth>(
  {
    pin: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Create the Pin model
export const Pin = model<TAuth, PinModel>("Pin", pinSchema);
