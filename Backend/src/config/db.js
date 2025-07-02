import mongoose from "mongoose";
import adminSeeders from "../seeders/adminSeeders.js";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        await adminSeeders();
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;   