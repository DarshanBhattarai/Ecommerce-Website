import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configDotenv();
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is running on port", port);
});
