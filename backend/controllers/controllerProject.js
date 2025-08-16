import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (e) {
    res.status(400).json({ message: e.message || "Invalid data" });
  }
};
