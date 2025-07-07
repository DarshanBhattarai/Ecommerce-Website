import { register } from "../services/authServices.js"; // named import

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, confirmPassword } = req.body;

    if (!name || !email || !password || !phone || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    await register(req.body);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
