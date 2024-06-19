import nodeMailer from "../utility/nodeMailer.js";

const mailer = async (req, res) => {
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
  console.log(req.body);
  const mailOptions = {
    from: `${email}`,
    to: process.env.GMAIL_ID2,
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
    const { status, message } = await nodeMailer(mailOptions);
    console.log(status, message, 32);
    if (status === 200) {
      res.status(200).send("Email Sent Successfully!");
    }
  } catch (error) {
    res.status(500).send("Error sending email. Please try again later.");
  }
};

export { mailer };
