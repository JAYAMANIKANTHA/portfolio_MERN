import { Router } from "express";
import { submitContact, getContacts } from "../controllers/contactController.js";


const router = Router();

router.post("/", submitContact);
router.get("/", getContacts); // protected by x-admin-token

export default router;
