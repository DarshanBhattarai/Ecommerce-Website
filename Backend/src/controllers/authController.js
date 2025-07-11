import { createToken } from "../helper/token.js";
import authServices from "../services/authServices.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, confirmPassword } = req.body;

    if (!name || !email || !password || !phone || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const data = await authServices.register(req.body);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const data = await authServices.login({ email, password });

    const payload = {
      id: data._id,
      name: data.name,
      email: data.email,
      role: data.role,
    };

    const token = createToken(payload);
    res.cookie("authToken", token);
    res.status(200).json({
      message: "User logged in successfully",
      data,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};

export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const data = await authServices.forgetPassword({ email });
    res.status(200).json({ message: "Otp sent", data });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
