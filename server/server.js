const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const transporter = nodemailer.createTransport({
  host: "mail.cafe-miranda.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/post", (req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: "info@cafe-miranda.com",
    subject: req.body.subject,
    text: `From: ${req.body.email} \n\n ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.json({ status: "success" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});