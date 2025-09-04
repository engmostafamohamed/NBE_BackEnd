export interface AddNidTelSrcDto {
  nationalId: string;
  phoneNumber: string;
}

export interface UpdateCustNidTelSrcDto {
  nationalId?: string;
  phoneNumber?: string;
}
export interface SendOtpDto {
  phoneNumber: string;
}

export interface VerifyOtpDto {
  phoneNumber: string;
  otp: string;
}