import express from "express";
import cors from "cors";
import route from "./src/routes/api.js"
import dotenv from 'dotenv';
import connectDB from "./db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'access_token']
}));

app.get("/", (req, res) => {
    res.send("Hello Server");
});

app.use("/v1", route);

app.listen(3000, () => {
    console.log("Server Running");
});

export default app;