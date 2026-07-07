import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    // Schema fields will be defined in the tasks module implementation step.
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
