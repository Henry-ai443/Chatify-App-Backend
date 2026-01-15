import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("This is the signup enpoint");
})

export default router