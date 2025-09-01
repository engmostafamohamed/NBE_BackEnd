import { IsEmail, IsString, IsIn } from "class-validator";

export class SendOtpDto {
  @IsEmail({}, { message: "Please provide a valid email address" })
  email!: string;

  @IsString({ message: "Type is required" })
  @IsIn(["email", "phone"], { message: "Type must be either 'email' or 'phone'" })
  type!: string;
}
