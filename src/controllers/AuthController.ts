import { Request, Response } from "express";
import { successResponse , errorResponse} from "../middlewares/errorHandler";
import {
  sendOtpService,
  verifyOtpService,
  StoreNationalIdAndPhoneNumber,
} from "../services/Auth/NationalIdAndPhoneNumber";
import { NidTelSrcResource } from "../resources/auth/nidTelSrcResource";
import {
  AddNidTelSrcDto,
  UpdateCustNidTelSrcDto,
  SendOtpDto,
  VerifyOtpDto
} from "../dtos/auth/nidTelSrcDto";

// Store National ID and Phone Number
export const storeNationalIdAndPhoneNumberController = async (
  req: Request,
  res: Response
) => {
  try {
    const dto: AddNidTelSrcDto = {
      nationalId: req.body.nationalId,
      phoneNumber: req.body.phoneNumber,
    };

    const result = await StoreNationalIdAndPhoneNumber(
      dto.nationalId,
      dto.phoneNumber
    );

    if (!result.success) {
      return errorResponse(
        res,
        req.t(result.messageKey || "common.internalServerError"),
        400 
      );
    }
    return successResponse(
      res,
      null,
      req.t(result.messageKey || "nationalIdPhoneNumber.stored")
    );
  } catch (error: any) {
    return errorResponse(
      res,
      error.message || req.t("common.internalServerError"),
      500
    );
  }
};

// Send OTP
export const sendOtpController = async (req: Request, res: Response) => {
  try {
    const dto: SendOtpDto = req.body;

    const result = await sendOtpService(dto.phoneNumber);
    if(!result.success) {
      return errorResponse(res, req.t(result.messageKey || "otp.invalid"), 400);
    }
    return successResponse(res, result, req.t("otp.sent"));
  } catch (error: any) {
    return errorResponse(
      res,
      error.message || req.t("common.internalServerError"),
      500
    );
  }
};
// Verify OTP
export const verifyOtpController = async (req: Request, res: Response) => {
  try {
    const dto: VerifyOtpDto = req.body;

    const result = await verifyOtpService(dto.phoneNumber, dto.otp);

    if(!result.success) {
      return errorResponse(res, req.t(result.messageKey || "otp.invalid"), 400);
    }

    return successResponse(res, [], req.t("otp.verified"));
  } catch (error: any) {
    return errorResponse(
      res,
      error.message || req.t("common.internalServerError"),
      500
    );
  }
};
