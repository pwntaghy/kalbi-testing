import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  adminCreateUser,
  getDashboardsStats,
} from "../controller/adminUserController.js";

const router = express.Router();

router.post("/create-user", requireSignIn, isAdmin, adminCreateUser);
router.get("/dashboard-stats", requireSignIn, isAdmin, getDashboardsStats);

export default router;
