import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dayPlannerRoutes from "./routes/dayPlanner.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/day-planner", dayPlannerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
