import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    // Schema fields will be defined in the company management implementation step.
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);
