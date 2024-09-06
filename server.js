const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "medmachlou23@gmail.com", // Replace with your Gmail
    pass: "Machlou#91@Express", // Replace with your Gmail password or app password
  },
});

// Email Sending Route
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "medmachlou@gmail.com", // The email address to send to
    subject: `New Contact Message from ${name}`,
    text: `You have received a new message from ${name} (${email}): \n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log("this is Infos : ", info);
    if (error) {
      return res
        .status(500)
        .send({ success: false, message: "Error sending email" });
    }
    res.status(200).send({ success: true, message: "Email sent successfully" });
  });
});

// Start the server
const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
