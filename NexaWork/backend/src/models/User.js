import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Schema fields will be defined in the authentication implementation step.
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
