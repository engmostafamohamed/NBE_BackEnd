import { Request, Response, NextFunction } from "express";
const { body, param, validationResult } = require("express-validator");
import { errorResponse } from "./errorHandler";

export class NidTelSrcMiddleware {
  static validateStore = [
    body("nationalId")
      .notEmpty()
      .withMessage((value: any, { req }: any) => req.t("validation.nationalId_required"))
      .isLength({ min: 10, max: 20 })
      .withMessage((value: any, { req }: any) => req.t("validation.nationalId_length")),

    body("phoneNumber")
      .notEmpty()
      .withMessage((value: any, { req }: any) => req.t("validation.phone_required"))
      .matches(/^\+?[\d\s\-\(\)]{10,15}$/)
      .withMessage((value: any, { req }: any) => req.t("validation.phone_invalid")),

    NidTelSrcMiddleware.handleValidationErrors,
  ];

  static validateUpdate = [
    body("nationalId")
      .optional()
      .isLength({ min: 10, max: 20 })
      .withMessage((value: any, { req }: any) => req.t("validation.nationalId_length")),

    body("phoneNumber")
      .optional()
      .matches(/^\+?[\d\s\-\(\)]{10,15}$/)
      .withMessage((value: any, { req }: any) => req.t("validation.phone_invalid")),

    NidTelSrcMiddleware.handleValidationErrors,
  ];

  static validateId = [
    param("id")
      .isInt({ min: 1 })
      .withMessage((value: any, { req }: any) => req.t("validation.id_positive")),

    NidTelSrcMiddleware.handleValidationErrors,
  ];

  static handleValidationErrors(req: Request, res: Response, next: NextFunction): void {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errorResponse(res, req.t("validation.failed"), 400, errors.array());
      return;
    }
    next();
  }
}
