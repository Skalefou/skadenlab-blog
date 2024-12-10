import mongoose from "mongoose";

let isConnected = false;
const { MONGODB_URI } = process.env;
export const connectDB = async () => {
    if (isConnected) {
        return Promise.resolve(true);
    }

    try {
        const { connection } = await mongoose.connect(MONGODB_URI as string);
        if (connection.readyState === 1) {
            isConnected = true;
            return Promise.resolve(true);
        }
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};
