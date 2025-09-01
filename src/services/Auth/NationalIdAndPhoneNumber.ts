import { IApiResponse } from "../../interfaces/ApiResponse";
import { INationalIDAndPhoneNumber } from "../../interfaces/NationalIDAndPhoneNumber";
import { generateOTP } from "../../utils/auth";

// Store NationalId and PhoneNumber (example)
export const StoreNationalIdAndPhoneNumber = async (
  nationalID: number,
  phoneNumber: string
): Promise<INationalIDAndPhoneNumber> => {
  try {
    const otpCode = generateOTP();

    return { nationalID, phoneNumber};
  } catch (error: any) {
    throw new Error(error.message || "Internal Server Error");
  }
};

export const sendOtpService = async (nationalId: string, phoneNumber: string) => {
  return { otp: "123456", nationalId, phoneNumber }; 
};

export const verifyOtpService = async (otp: string, phoneNumber: string) => {
  const isValid = otp === "123456";
  return { isValid };
};