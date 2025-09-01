import express from "express";
import { validateDto } from "../middlewares/validateDto";
import { SendOtpDto } from "../dtos/auth/SendOtpDto";
import { VerifyOtpDto } from "../dtos/auth/VerifyOtpDto";

import {
  sendOtpController,
  verifyOtpController,
} from "../controllers/AuthController";

const router = express.Router();
router.post("/send-otp", validateDto(SendOtpDto), sendOtpController);
router.post("/verify-otp", validateDto(VerifyOtpDto), verifyOtpController);

export default router;
