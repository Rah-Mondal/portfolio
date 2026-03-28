import * as nodemailer from "nodemailer";

const smtpPort = Number(process.env.EMAIL_PORT || "587");
const smtpSecure = smtpPort === 465;
const emailTo = process.env.EMAIL_TO || "rahulmondaldob2002@gmail.com";
const emailFrom = process.env.EMAIL_FROM;

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email service is not configured.");
  }

  if (!emailFrom) {
    throw new Error(
      "EMAIL_FROM is missing. Set it to a sender email that is verified in Brevo."
    );
  }

  const info = await transporter.sendMail({
    from: `"Portfolio Contact" <${emailFrom}>`,
    to: emailTo,
    subject: `New message from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <div style="font-family:sans-serif">
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      </div>
    `,
  });

  if (!info.accepted?.length || info.rejected?.length) {
    throw new Error("Brevo did not accept the message for delivery.");
  }

  return {
    accepted: info.accepted,
    messageId: info.messageId,
    rejected: info.rejected,
    response: info.response,
  };
};
