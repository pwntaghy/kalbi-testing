import JWT from "jsonwebtoken";
import userModels from "../models/userModels.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer", "").trim();
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.auth = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (!req.auth?.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No user data",
      });
    }

    const user = await userModels.findById(req.auth.id);

    if (!user || user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied - Admins Only",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while verifying admin",
      error,
    });
  }
};
