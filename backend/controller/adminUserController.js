import { hashPassword } from "../helpers/authHelper.js";
import job from "../models/job.js";
import userModels from "../models/userModels.js";
import Application from "../models/application.js";

export const adminCreateUser = async (req, res) => {
  try {
    const { fname, lname, email, number, password, role } = req.body;
    if (!["hr", "employee"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Only HR or Employee can be created by Admin",
      });
    }

    const existing = await userModels.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "This email is already registred",
      });
    }

    const hashedPassword = await hashPassword(password, 10);

    const user = await userModels.create({
      fname,
      lname,
      email,
      number,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      message: `${role.toUpperCase()} created Succesfully`,
    });
  } catch (error) {
    console.log("Create user error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating user",
      error,
    });
  }
};

export const getDashboardsStats = async (req, res) => {
  try {
    const totalUsers = await userModels.countDocuments();
    const totalJobs = await job.countDocuments();
    const totalApplication = await Application.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalJobs,
        totalApplication,
      },
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard stats",
    });
  }
};
