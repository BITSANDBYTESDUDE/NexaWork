import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    // Schema fields will be defined in the notifications module implementation step.
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
