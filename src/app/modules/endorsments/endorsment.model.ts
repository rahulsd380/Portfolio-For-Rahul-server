import { Schema, model } from "mongoose";
import { TEndorsement } from "./endorsment.interface";

const endorsementSchema: Schema = new Schema<TEndorsement>(
  {
    authorImg: {
      type: String
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    occupation: {
      type: String,
      required: [true, "Occupation is required"],
    },
    feedback: {
      type: String,
      required: [true, "Feedback is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
    }
  },
  {
    timestamps: true,
  }
);

export const Endorsement = model<TEndorsement>("Endorsement", endorsementSchema);