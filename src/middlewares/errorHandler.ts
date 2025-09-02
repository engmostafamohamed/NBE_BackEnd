import { Response } from "express";
import { SuccessResponse, ErrorResponse } from "../interfaces/ApiResponse";

// success response
export const successResponse = <T>(
  res: Response,
  data: T,
  message: string,
  statusCode: number = 200
): Response<SuccessResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    statusCode,
    message,
    data,
  });
};

// error response
export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number = 500,
  validationErrors: { field: string; message: string }[] = []
): Response => {
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errors: validationErrors,
  } as ErrorResponse);
};
