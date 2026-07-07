import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    // Schema fields will be defined in the projects module implementation step.
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
