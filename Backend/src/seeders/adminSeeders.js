import User from "../model/User.js";
import { hashPassword } from "../utils/utility.js";

const adminSeeders = async () => {
  try {
    const adminFOund = await User.findOne({ email: process.env.ADMIN_EMAIL });

    if (!adminFOund) {
      const password = await hashPassword(process.env.ADMIN_PASSWORD);
      const admin = new User({
        name: process.env.ADMIN_NAME,
        email: process.env.ADMIN_EMAIL,
        password,
        phone: process.env.ADMIN_PHONE,
        role: ["admin"],
      });

      await admin.save();
      console.log("Admin user created");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.log(error);
  }
};

export default adminSeeders;
