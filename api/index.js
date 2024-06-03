import express from "express";
import "dotenv/config";
import cors from "cors";

import router from "./src/routers/index.js";
import connectDB from "./src/config/db.js";
import { errorHandlerMiddleware } from "./src/middlewares/error.middleware.js";

const app = express();

connectDB();

app.use(express.json());

app.use(cors({
    origin: "*", // allow to server to accept request from different origin
    methods: ["GET", "POST", "PUT", "DELETE"], // allow to server to accept request from different method
    credential: true, // allow session cookie from browser to pass through
    optionsSuccessStatus: 200,
}));

app.use("/api", router);

app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});