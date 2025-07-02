import express from "express";
import { createUser } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/user", (req, res) => {
  res.send("User Route");
});

router.post("/createUser", createUser);

export default router;
