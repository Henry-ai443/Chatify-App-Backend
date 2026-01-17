import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB connected successfully")
    }catch(error){
        console.error("Erro connecting mongo db:", error);
        process.exit(1)
    }
}