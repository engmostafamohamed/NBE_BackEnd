// import { INationalIDAndPhoneNumber } from "../../interfaces/ICustNidTelSrc";
import Otp from "../../models/otp";
import { generateOTP } from "../../utils/auth";
import NidTelSrc from "../../models/nid_tel_src";
import { Op } from "sequelize";
// Store NationalId and PhoneNumber
export const StoreNationalIdAndPhoneNumber = async (
  nationalId: string,
  phoneNumber: string
) => {
  try {
    //Check if phone number is verified
    const otpRecord = await Otp.findOne({
      where: {
        phoneNumber,
        isVerified: true,
      },
      order: [["createdAt", "DESC"]],
    });

    if (!otpRecord) {
      return { success: false, messageKey: "phone.notVerified" };
    }

    //Store NationalId + PhoneNumber
    await NidTelSrc.create({ nationalId, phoneNumber });

    return {
      success: true,
      messageKey: "nationalIdPhoneNumber.stored",
    };
  } catch (error: any) {
    // return { success: false, messageKey: error.message || "common.internalServerError" };
    return { success: false, messageKey: "common.internalServerError" };
  }
};

export const sendOtpService = async (phoneNumber: string) => {
  // check if phone is already verified
  const alreadyVerified = await Otp.findOne({
    where: { phoneNumber, isVerified: true },
  });

  if (alreadyVerified) {
    return { success: false, messageKey: "phone.alreadyVerified" };
  }

  const otp = generateOTP();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await Otp.create({
    phoneNumber,
    otp,
    expiresAt,
  });

  return { success: true, phoneNumber, otp };
};


// Verify OTP from DB
export const verifyOtpService = async (phoneNumber: string, otp: string) => {
  try {
    // check if phone is already verified
    const alreadyVerified = await Otp.findOne({
      where: { phoneNumber, isVerified: true },
    });

    if (alreadyVerified) {
      return { success: false, messageKey: "phone.alreadyVerified" };
    }

    const otpRecord = await Otp.findOne({
      where: {
        phoneNumber,
        otp,
        expiresAt: { [Op.gt]: new Date() },
      },
      order: [["createdAt", "DESC"]],
    });

    if (!otpRecord) {
      return { success: false, messageKey: "otp.invalid" };
    }

    // mark phone as verified
    otpRecord.isVerified = true;
    await otpRecord.save();

    return { success: true, messageKey: "otp.verified" };
  } catch (error: any) {
    return { success: false, messageKey: "common.internalServerError" };
  }
};
