import express from "express";
import { createUser } from "../controllers/userControllers.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
import isAdmin from "../middleware/isAdmin.js";
const router = express.Router();

router.get("/", isLoggedIn, isAdmin, (req, res) => {
 const user = req.user;
 console.log(user);
 res.send("user");
});

router.post("/createUser", createUser);

export default router;
