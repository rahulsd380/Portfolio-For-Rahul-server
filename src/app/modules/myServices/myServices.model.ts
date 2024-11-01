import { Schema, model } from "mongoose";
import { TMyService } from "./myServices.interface";

const myServiceSchema: Schema = new Schema<TMyService>(
  {
    icon: {
      type: String
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    }
  },
  {
    timestamps: true,
  }
);

export const MyService = model<TMyService>("MyService", myServiceSchema);