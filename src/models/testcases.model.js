import mongoose, { Schema } from "mongoose";

const testCaseSchema = new Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true
  },
  input: {
    type: String,
    required: true
  },
  output: {
    type: String,
    required: true
  },
  explanation: {
    type: String
  }
});

export const TestCase = mongoose.model("TestCase", testCaseSchema);
