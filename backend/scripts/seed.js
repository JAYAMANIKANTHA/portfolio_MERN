import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Project from "../models/Project.js";

dotenv.config();

const data = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with MERN.",
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/yourname/portfolio",
    demo: "https://your-portfolio.live",
    image: "https://picsum.photos/seed/portfolio/800/500"
  },
  {
    title: "Chat App",
    description: "Real-time chat using Socket.io.",
    tech: ["React", "Node", "Socket.io"],
    github: "https://github.com/yourname/chatapp",
    demo: "",
    image: "https://picsum.photos/seed/chat/800/500"
  }
];

(async () => {
  try {
    await connectDB();
    await Project.deleteMany({});
    await Project.insertMany(data);
    console.log("Seed complete");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
