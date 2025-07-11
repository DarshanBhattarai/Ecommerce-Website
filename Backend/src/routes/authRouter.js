import express from "express";
import { registerUser, loginUser, forgetPassword } from "../controllers/authController.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgetPassword", forgetPassword);

export default router;
