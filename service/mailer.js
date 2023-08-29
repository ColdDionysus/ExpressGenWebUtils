const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
const sendMessage = async (payload) => {
  const { from, to, message } = payload;
  const info = await transporter.sendMail({
    from: from.toString(), // sender address
    to: to.toString(), // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: JSON.stringify(message), // html body
  });

  return info.messageId;
};

module.exports = { sendMessage };
