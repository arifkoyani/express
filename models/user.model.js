import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema(
  {
    fname: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
export default User;
