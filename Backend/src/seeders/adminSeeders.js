import User from "../model/User.js";

const adminSeeders = async () => {
  try {
    const adminFOund = await User.findOne({ email: process.env.ADMIN_EMAIL });
   

    if (!adminFOund) {
      const admin = new User({
        name: process.env.ADMIN_NAME,
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
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
