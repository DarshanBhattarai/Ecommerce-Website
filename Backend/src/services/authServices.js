import bcrypt from "bcrypt";
import User from "../model/User.js";
import { hashPassword } from "../utils/utility.js";
import { otpGenerate } from "../utils/otp.js";
import { sendMail } from "../utils/mail.js";

const register = async (data) => {
  const hashedPassword = await hashPassword(data.password);
  const email = data.email;
  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new Error("user already exist");
  }

  return await User.create({
    email: email,
    password: hashedPassword,
    phone: data.phone,
    name: data.name,
  });
};

const login = async (data) => {
  const doEmailExist = await User.find({ email: data.email });

  if (!doEmailExist) {
    throw new Error("user does not exist");
  }
  if (doEmailExist.length === 0) {
    throw new Error("user does not exist");
  }
  const dbPassword = doEmailExist[0].password;
  const isPasswordMatch = bcrypt.compareSync(data.password, dbPassword);
  if (isPasswordMatch) {
    return doEmailExist[0];
  } else {
    throw new Error("password does not match");
  }
};

const forgetPassword = async (data) => {
  const doEmailExist = await User.find({ email: data.email });

  if (!doEmailExist) {
    throw new Error("user does not exist");
  }
  if (doEmailExist.length === 0) {
    throw new Error("user does not exist");
  }
  const otp = otpGenerate();
  await sendMail(data.email, otp);
  return 

};

export default { register, login, forgetPassword };
