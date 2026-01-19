import express from "express";
import {
  applicationDelete,
  downloadResume,
  getApplication,
  submitApplication,
} from "../controller/applicatioinController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { uploadResume } from "../middlewares/upload.js";

const router = express.Router();

router.post(
  "/apply",
  requireSignIn,
  uploadResume.single("resume"),
  submitApplication
);

router.get("/get-application", requireSignIn, isAdmin, getApplication);

router.get(
  "/get-application/:id/resume",
  requireSignIn,
  isAdmin,
  downloadResume
);

router.delete(
  "/delete-application/:id",
  requireSignIn,
  isAdmin,
  applicationDelete
);

export default router;
