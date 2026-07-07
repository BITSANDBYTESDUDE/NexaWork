import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    // Schema fields will be defined in the reports module implementation step.
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);
