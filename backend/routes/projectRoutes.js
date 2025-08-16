import { Router } from "express";
import { getProjects, createProject } from "../controllers/controllerProject.js";

const router = Router();

router.get("/", getProjects);
router.post("/", createProject); // (optional) add auth later

export default router;
