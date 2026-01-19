import mongoose from "mongoose";
import job from "../models/job.js";

export const createJob = async (req, res) => {
  try {
    const {
      title,
      location,
      description,
      salary,
      experince,
      requirements,
      type,
    } = req.body;
    const existingJob = await job.findOne({
      title,
      location,
      description,
      salary,
      experince,
      requirements,
      type,
    });
    if (existingJob) {
      return res.status(400).json({
        message: "This job already posted",
      });
    }
    const jobs = await job.create(req.body);
    res.status(201).json({
      success: true,
      message: "Job is Succesfully created",
      jobs,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Error while creating a job",
    });
  }
};

//get all jobs
export const listJobs = async (req, res) => {
  try {
    const jobs = await job.find().sort({ createdAt: -1 });
    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Jobs Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All Jobs list",
      jobs,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Error while fetching jobs",
    });
  }
};

//get single job
export const getJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job Id",
      });
    }
    const jobs = await job.findById(id);
    if (!jobs) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job fetch Succesfully",
      jobs,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "failed to fetch jobs",
      error,
    });
  }
};

//update job

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Job ID",
      });
    }

    const existingJob = await job.findById(id);
    if (!existingJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    const updatedJob = await job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      success: true,
      message: "Job Updated Succesfully",
      job: updatedJob,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "failed to update jobs",
      error,
    });
  }
};

//delete job

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteJobs = await job.findByIdAndDelete(id);
    if (!deleteJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "selected Job Delete succesfully",
      deleteJobs,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "failed to delete jobs",
      error,
    });
  }
};
