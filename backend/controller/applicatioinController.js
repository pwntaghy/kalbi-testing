import Application from "../models/application.js";
import cloudinary from "../config/cloudinary.js";

export const submitApplication = async (req, res) => {
  try {
    const {
      jobId,
      name,
      email,
      number,
      qualification,
      city,
      pincode,
      address,
      message,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required",
      });
    }

    if (
      !name ||
      !email ||
      !number ||
      !qualification ||
      !city ||
      !pincode ||
      !address ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existApply = await Application.findOne({ email, jobId });

    if (existApply) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
      });
    }

    const uploadResult = await cloudinary.uploader.upload(
      `data:application/pdf;base64,${req.file.buffer.toString("base64")}`,
      {
        folder: "resumes",
        resource_type: "raw",
        type: "upload",
        access_mode: "public",
        public_id: `${Date.now()}-${name.replace(/\s+/g, "-")}`,
        format: "pdf",
      }
    );

    const newApplication = await Application.create({
      jobId,
      name,
      email,
      number,
      qualification,
      city,
      pincode,
      address,
      message,
      resumepath: uploadResult.secure_url,
      resumePublicId: uploadResult.public_id,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: newApplication,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit application. Please try again later",
      error,
    });
  }
};

export const getApplication = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { from, to, search } = req.query;
    const query = {};

    if (from && to) {
      query.createdAt = {
        $gte: new Date(from + "T00:00:00.000Z"),
        $lte: new Date(to + "T23:59:59.999Z"),
      };
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const application = await Application.find(query)
      .populate("jobId", "title location")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalApplication = await Application.countDocuments(query);

    if (totalApplication === 0) {
      return res.status(404).json({
        success: false,
        message: "No Application Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "All Application",
      total: totalApplication,
      currentPage: page,
      totalPage: Math.ceil(totalApplication / limit),
      data: application,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch applications at the moment.",
      error,
    });
  }
};

export const downloadResume = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    return res.status(200).json({
      success: true,
      url: application.resumepath,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Resume download failed",
    });
  }
};

// delete user
export const applicationDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (application.resumePublicId) {
      await cloudinary.uploader.destroy(application.resumePublicId, {
        resource_type: "raw",
      });
    }

    await Application.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Application deleted Succesfully",
    });
  } catch (error) {
    console.log("Delete Error", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete application. Please try again.",
      error,
    });
  }
};
