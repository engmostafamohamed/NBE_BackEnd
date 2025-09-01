import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import i18next from "i18next";

export const validateDto = (DtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(DtoClass, req.body);
    const errors = await validate(dtoObject, { whitelist: true });

    if (errors.length > 0) {
      const formattedErrors = errors.map((err) => ({
        field: err.property,
        message: Object.values(err.constraints || {})
          .map((msg) => i18next.t(msg))
          .join(", "),
      }));

      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: i18next.t("validation_failed"), 
        errors: formattedErrors,
      });
    }
    next();
  };
};
