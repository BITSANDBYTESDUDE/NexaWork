import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    // Schema fields will be defined in the departments module implementation step.
  },
  { timestamps: true }
);

export default mongoose.model("Department", departmentSchema);
