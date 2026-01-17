import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        const {MONGO_URI} = process.env.MONGO_URI;
        if(!MONGO_URI) throw new Error("MONGO_URI is not set");

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected successfully");
    }catch(error){
        console.error("Erro connecting mongo db:", error);
        process.exit(1)
    }
}