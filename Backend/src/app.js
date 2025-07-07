import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configDotenv();
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRoutes);
app.use("/api", productRoutes);

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is running on port", port);
});
