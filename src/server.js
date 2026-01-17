import express from "express";
import dotenv from "dotenv";

dotenv.config()

//IMPORTS
import authroutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDb } from "./lib/db.js";

const app = express()

//MIDDLEWARE
app.use(express.json)

const PORT = process.env.PORT

//ENDPOINTS
app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDb()
})