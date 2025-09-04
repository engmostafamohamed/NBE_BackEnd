import express from "express";
import { NidTelSrcMiddleware } from "../middlewares/nidTelSrcMiddleware";
import { OtpMiddleware } from "../middlewares/otpMiddleware";
import {
  sendOtpController,
  verifyOtpController,
  storeNationalIdAndPhoneNumberController,
} from "../controllers/AuthController";

const router = express.Router();
router.post(
  "/store-nid-phone",
  NidTelSrcMiddleware.validateStore,
  storeNationalIdAndPhoneNumberController
);
router.post("/send-otp", OtpMiddleware.validateSendOtp, sendOtpController);
router.post("/verify-otp", OtpMiddleware.validateVerifyOtp, verifyOtpController);

export default router;
