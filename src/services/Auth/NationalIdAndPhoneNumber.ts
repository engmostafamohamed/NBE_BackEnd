// import { INationalIDAndPhoneNumber } from "../../interfaces/ICustNidTelSrc";
type INationalIDAndPhoneNumber = { nationalID: number; phoneNumber: string };
import { generateOTP } from "../../utils/auth";
import CustNidTelSrc from "../../models/cust_nid_tel_src";

// Store NationalId and PhoneNumber (example)
export const StoreNationalIdAndPhoneNumber = async (
  nationalId: string,
  phoneNumber: string
): Promise<{ success: boolean; data?: INationalIDAndPhoneNumber; error?: string }> => {
  try {
    const record = await CustNidTelSrc.create({
      nationalId,
      phoneNumber,
    });

    return {
      success: true,
      data: {
        nationalID: Number(record.nationalId),
        phoneNumber: record.phoneNumber,
      },
    };
  } catch (error: any) {
    return { success: false, error: error.message || "Internal Server Error" };
  }
};


export const sendOtpService = async (nationalId: string, phoneNumber: string) => {
  return { otp: "123456", nationalId, phoneNumber }; 
};

export const verifyOtpService = async (otp: string, phoneNumber: string) => {
  const isValid = otp === "123456";
  return { isValid };
};