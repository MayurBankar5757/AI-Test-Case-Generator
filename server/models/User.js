
import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "-",
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
   mobile: {
    type: Number,
    required: true,
  }
},
{
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
// module.exports=User
export default User;