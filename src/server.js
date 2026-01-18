import express from "express";
import {ENV} from "./lib/env.js";
//IMPORTS
import authroutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDb } from "./lib/db.js";

const app = express()

//MIDDLEWARE
app.use(express.json)

const PORT = ENV.PORT

//ENDPOINTS
app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDb()
})