import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8ae98519ed3414",
    pass: "0fc40616254244"
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