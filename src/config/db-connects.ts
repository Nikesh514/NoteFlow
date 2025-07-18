import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
   try {
     const conn = await mongoose.connect(process.env.DB_URI!);
     console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (e) {
        console.error(`Error connecting to MongoDB: ${e}`);
        process.exit(1); // Exit process with failure
   }


}

export default connectDB;