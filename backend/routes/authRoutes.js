import express from "express";
import {
  assignRole,
  loginController,
  registerController,
  updateProfile,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object

const router = express.Router();

//Register
router.post("/register", registerController);
//login
router.post("/login", loginController);
//update profile
router.put("/update-profile", requireSignIn, updateProfile);

router.put("/assign-role/:id", requireSignIn, isAdmin, assignRole);

export default router;
