import bcrypt from "bcrypt";
import User from "../model/User.js";

const register = async (data) => {
  const hashPassword = await bcrypt.hash(data.password, 10);

  const email = data.email;
  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new Error("User already exists");
  }

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashPassword,
    phone: data.phone,
    role: ["customer"],
  });

  return user; // return created user if needed
};

export { register };
