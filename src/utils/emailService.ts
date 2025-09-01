import nodemailer from 'nodemailer';

export const sendOTPByEmail = async (to: string, otp: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST, // smtp.gmail.com
    port: parseInt(process.env.MAIL_PORT || '587'), // 587
    secure: false, // STARTTLS (true for port 465)
    auth: {
      user: process.env.MAIL_USERNAME, // Your Gmail address
      pass: process.env.MAIL_PASSWORD, // App password
    },
  });

  const mailOptions = {
    from: `"STLR" <${process.env.MAIL_FROM_ADDRESS}>`,
    to,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}\nThis code will expire in 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully');
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw new Error('EMAIL_SENDING_FAILED');
  }
};



