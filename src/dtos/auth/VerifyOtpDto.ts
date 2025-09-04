// import { IsString, Length, Matches } from "class-validator";

// export class VerifyOtpDto {
//   @IsString()
//   @Matches(/^\+?[\d\s\-\(\)]{10,15}$/, { message: "Invalid phone number format" })
//   phoneNumber!: string;

//   @IsString({ message: "OTP must be a string" })
//   @Length(6, 6, { message: "OTP must be exactly 6 digits" })
//   otp!: string;
// }

export interface VerifyOtpDto {
  phoneNumber: string;
  otp: string;
}