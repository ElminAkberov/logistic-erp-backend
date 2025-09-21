import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("✅ MongoDB connected");
    } catch (error: any) {
        console.error("❌ DB connection error:", error.message);
        process.exit(1);
    }
};
