import { Request, Response } from "express";
import { successResponse, errorResponse } from "../middlewares/errorHandler";

import { sendOtpService, verifyOtpService, StoreNationalIdAndPhoneNumber } from "../services/Auth/NationalIdAndPhoneNumber";

// Store National ID and Phone Number
export const storeNationalIdAndPhoneNumber = async (req: Request, res: Response) => {
  try {
    const { nationalId, phoneNumber } = req.body;

    const result = await StoreNationalIdAndPhoneNumber(nationalId, phoneNumber);

    return successResponse(req.t("nationalIdPhoneNumber.stored"), result);
  } catch (error: any) {
    return errorResponse(error.message || req.t("error.internal"), 500);
  }
};

// Send OTP
export const sendOtpController = async (req: Request, res: Response) => {
  try {
    const { nationalId, phoneNumber } = req.body;
    const result = await sendOtpService(nationalId, phoneNumber);

    return successResponse(req.t("otp.sent"), result);
  } catch (error: any) {
    return errorResponse(error.message || req.t("error.internal"), 500);
  }
};

// Verify OTP
export const verifyOtpController = async (req: Request, res: Response) => {
  try {
    const { otp, phoneNumber } = req.body;
    const result = await verifyOtpService(otp, phoneNumber);

    if (!result.isValid) {
      return errorResponse(req.t("otp.invalid"), 400);
    }

    return successResponse(req.t("otp.verified"), result);
  } catch (error: any) {
    return errorResponse(error.message || req.t("error.internal"), 500);
  }
};
