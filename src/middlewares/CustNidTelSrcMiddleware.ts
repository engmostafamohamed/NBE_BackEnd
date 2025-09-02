import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { errorResponse } from '../middlewares/errorHandler';

export class CustNidTelSrcMiddleware {
  static validateCreate = [
    body('nationalId')
      .notEmpty()
      .withMessage('National ID is required')
      .isLength({ min: 10, max: 20 })
      .withMessage('National ID must be between 10-20 characters'),
    
    body('phoneNumber')
      .notEmpty()
      .withMessage('Phone number is required')
      .matches(/^\+?[\d\s\-\(\)]{10,15}$/)
      .withMessage('Invalid phone number format'),
    
    CustNidTelSrcMiddleware.handleValidationErrors
  ];

  static validateUpdate = [
    body('nationalId')
      .optional()
      .isLength({ min: 10, max: 20 })
      .withMessage('National ID must be between 10-20 characters'),
    
    body('phoneNumber')
      .optional()
      .matches(/^\+?[\d\s\-\(\)]{10,15}$/)
      .withMessage('Invalid phone number format'),
    
    CustNidTelSrcMiddleware.handleValidationErrors
  ];

  static validateId = [
    param('id')
      .isInt({ min: 1 })
      .withMessage('ID must be a positive integer'),
    
    CustNidTelSrcMiddleware.handleValidationErrors
  ];

  static handleValidationErrors(req: Request, res: Response, next: NextFunction): void {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errorResponse(res, 'Validation failed', errors.array(), 400);
      return;
    }
    next();
  }
}
