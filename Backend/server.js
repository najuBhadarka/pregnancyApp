import express from "express";
import cors from "cors";
import route from "./src/routes/api.js";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { RateLimiterMemory } from "rate-limiter-flexible";
import helmet from "helmet";
dotenv.config();
connectDB();

const app = express();
const rateLimiter = new RateLimiterMemory({
  points: 10, // maximum number of requests allowed
  duration: 1, // time frame in seconds
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "access_token", "authorization"],
  })
);

app.use(
  helmet({
    xPoweredBy: false,
  })
);

app.use((err, req, res, next) => {
  if (err.code === "permission_denied") {
    res.status(403).json({ error: "Permission denied" });
  } else {
    next(err);
  }
});

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send("Too Many Requests");
    });
};

app.use(rateLimiterMiddleware);

app.use("/v1", route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
