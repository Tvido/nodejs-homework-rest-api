const { Conflict } = require("http-errors");
const { User } = require("../../models");

const { sendMail } = require("../../../utils");

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const newUser = new User({ email });

  newUser.createVerifyToken();
  newUser.setPasswor(password);

  await newUser.save();

  const { verificationToken } = newUser;
  const data = {
    to: email,
    subject: "Registration",
    html: `<a href="http:localhost:4000/users/verify/${verificationToken}">Confirm registration</a>`,
  };
  await sendMail(data);

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Success register",
  });
};

module.exports = signup;
