// import { IsString, Matches } from "class-validator";

// export class SendOtpDto {
//   @IsString({ message: "Phone number is required" })
//   @Matches(/^\+?[\d\s\-\(\)]{10,15}$/, {
//     message: "Invalid phone number format",
//   })
//   phoneNumber!: string;
// }

export interface SendOtpDto {
  phoneNumber: string;
}
