import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cors from "cors";
import cluster from "cluster";
import os from "os";

//dot env
dotenv.config();

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  // console.log(`Primary process running:${process.pid}`);
  // console.log(`Starting ${numCPUs} worker process...`);

  //fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  //if workesr dies => restart autometically
  cluster.on("exit", (worker, code, signal) => {
    // console.log(`Worker ${worker.process.pid} died. Restarting`);
    cluster.fork();
  });
} else {
  //Worker process run this part
  const app = express();

  //connect db
  connectDB();

  //middlewear
  app.use(express.json());

  app.use(
    cors({
      origin: ["http://localhost:5173","https://kalbii.org"],
      credentials: true,
    })
  );

  //Routes
  app.use("/api/v1/auth", authRoutes);
  //job
  app.use("/api/v1/jobs", jobsRoutes);
  //admin
  app.use("/api/v1/admin", adminRoutes);
  //application
  app.use("/api/v1/application", applicationRoutes);
  app.use("/uploads/resumes", express.static("uploads/resumes"));

  const PORT = process.env.PORT || 3000;

  app.get("/", (req, res) => {
    res.send("Express Server running");
  });

  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} running on port ${PORT}`);
  });
}
