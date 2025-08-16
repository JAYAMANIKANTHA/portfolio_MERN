import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

// connect database
await connectDB();

// middleware
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*"}));
app.use(express.json());

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// health
app.get("/", (req, res) => res.send("Portfolio API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
