const nodemiler = require("nodemiler");
require("dotenv").config();

const { EMAIL_PASS, EMAIL_ADDRESS } = process.env;

const nodemilerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_ADDRESS,
    pass: EMAIL_PASS,
  },
};

const transporter = nodemiler.createTransport(nodemilerConfig);

const sendMail = async (data) => {
  try {
    const email = { ...data, from: "tvido@meta.ua" };
    await transporter.sendMail(email);
  } catch (error) {}
};

module.exports = sendMail;
