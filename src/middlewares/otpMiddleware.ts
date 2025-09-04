// import { body, validationResult } from "express-validator";
const { body, validationResult } = require("express-validator");
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "./errorHandler";

export class OtpMiddleware {
  static validateSendOtp = [
    body("email").isEmail().withMessage("valid_email_required"),
    body("type").notEmpty().withMessage("otp_type_required"),

    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return errorResponse(res, req.t("validation_failed"), 400, errors.array());
      }
      next();
    },
  ];

  static validateVerifyOtp = [
    body("otp")
      .isLength({ min: 6, max: 6 })
      .withMessage("otp_must_be_6_digits"),
    body("phoneNumber")
      .matches(/^\+?[\d\s\-\(\)]{10,15}$/)
      .withMessage("invalid_phone_format"),

    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return errorResponse(res, req.t("validation_failed"), 400, errors.array());
      }
      next();
    },
  ];
}
