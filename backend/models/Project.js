import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tech: [{ type: String }],
    github: { type: String },
    demo: { type: String },
    image: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
