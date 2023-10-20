import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4c00b383f9043a",
      pass: "49723b837cb38c"
    }
});

const sendMail = (mailOptions) => {
  // Send the email
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

export default sendMail;