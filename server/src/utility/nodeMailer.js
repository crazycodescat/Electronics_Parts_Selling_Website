import nodemailer from "nodemailer";

async function nodeMailer(mailOptions) {
  console.log(process.env.GMAIL_ID, process.env.APP_PASSWORD);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.google.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.APP_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default nodeMailer;
