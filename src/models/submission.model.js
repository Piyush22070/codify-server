import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true
  },
  submissionTime: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    required: true
  },
  code: {
    type: String,
    required: true
  }
});

export const Submission = mongoose.model("Submission", submissionSchema);
