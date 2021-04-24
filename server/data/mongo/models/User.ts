import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: String,
  address1: String,
  address2: String,
  city: String,
  st: String,
  zip: String,
  image: String,
  createdAt: String,
  updatedAt: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
