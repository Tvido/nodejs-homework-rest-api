// const gravatar = require("gravatar");

const { User } = require("../../models");
const { Conflict } = require("http-errors");

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const newUser = new User({ email });
  newUser.setPasswor(password);
  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Success register",
  });
};

module.exports = signup;
