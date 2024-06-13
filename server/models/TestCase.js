import { Schema, model } from "mongoose";

const testCaseSchema = new Schema({
  code: {
    type: String,
    required: true,
  },

  specifications: {
    type: String,
    required: true,
  },
  
  instructions: {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
});

const TestCase = model("TestCase", testCaseSchema);

export default TestCase;