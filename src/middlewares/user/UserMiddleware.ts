import { Request, Response, NextFunction } from "express";

// Example user middleware - placeholder for user-related checks
export function userMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log("User middleware executed");
  // Add user validation or other logic here
  next();
}
