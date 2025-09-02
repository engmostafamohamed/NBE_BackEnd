import { Request, Response } from "express";
import { successResponse , errorResponse} from "../middlewares/errorHandler";
import {
  sendOtpService,
  verifyOtpService,
  StoreNationalIdAndPhoneNumber,
} from "../services/Auth/NationalIdAndPhoneNumber";

// Store National ID and Phone Number
export const storeNationalIdAndPhoneNumberController = async (
  req: Request,
  res: Response
) => {
  const { nationalId, phoneNumber } = req.body;

  const result = await StoreNationalIdAndPhoneNumber(nationalId, phoneNumber);

  if (!result.success) {
    return errorResponse(res, result.error || req.t("common.internalServerError"), 500);
  }

  return successResponse(res, result.data, req.t("nationalIdPhoneNumber.stored"));
};

// Send OTP
export const sendOtpController = async (req: Request, res: Response) => {
  const { nationalId, phoneNumber } = req.body;
  const result = await sendOtpService(nationalId, phoneNumber);

  return successResponse(res, result, req.t("otp.sent"));
};

// Verify OTP
export const verifyOtpController = async (req: Request, res: Response) => {
  const { otp, phoneNumber } = req.body;
  const result = await verifyOtpService(otp, phoneNumber);

  if (!result.isValid) {
    return errorResponse(res, req.t("otp.invalid"), 400);
  }

  return successResponse(res, result, req.t("otp.verified"));
};
