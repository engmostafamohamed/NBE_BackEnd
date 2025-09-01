import { Request, Response, NextFunction } from "express";

// Placeholder validateRequest middleware
export function validateRequest(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Add validation logic here using schema
    console.log("validateRequest middleware executed");
    next();
  };
}
