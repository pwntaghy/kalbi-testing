import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    experince: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
      default: [],
    },
    salary: String,
  },
  { timestamps: true }
);

export default mongoose.model("job", jobSchema);
