import nodeMailer from "../utility/nodeMailer.js";

const mailer = async (req, res) => {
  console.log(process.env.GMAIL_ID, process.env.APP_PASSWORD);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    partNumber,
    manufacturer,
    quantity,
    speacialInstructions,
  } = req.body;

  const mailOptions = {
    from: `taiyyab ❤❤ ${email}`,
    to: process.env.GMAIL_ID,
    subject: `Quotation Request for ${partNumber}`,
    text: `
      Name: ${firstName} ${lastName}.
      email: ${email}.
      phone: ${phoneNumber}.
      Part Number: ${partNumber}.
      manufacturer: ${manufacturer}.
      quantity: ${quantity}.
      speacialInstructions: ${speacialInstructions}
    `,
  };

  try {
    await nodeMailer(mailOptions);
    res.status(200).send("Email Sent Successfully!");
  } catch (error) {
    res.status(500).send("Error sending email. Please try again later.");
  }
};

export { mailer };
