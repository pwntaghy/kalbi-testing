import express from "express";
import {
  createJob,
  deleteJob,
  getJob,
  listJobs,
  updateJob,
} from "../controller/jobController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();
//create job
router.post("/create-job", requireSignIn, isAdmin, createJob);

//get all jobs
router.get("/get-job", listJobs);
//single job
router.get("/single-job/:id", getJob);
//update
router.put("/update-job/:id", requireSignIn, isAdmin, updateJob);
//deletejob
router.delete("/delete-job/:id", requireSignIn, isAdmin, deleteJob);

export default router;
