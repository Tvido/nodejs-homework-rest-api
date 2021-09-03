const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { BadRequest } = require("http-errors");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne(email);
  // if (!user || !user.cmparePassword(password)) {
  //   throw new BadRequest("Email or password is wrong");
  // }
  if (!user) {
    throw new BadRequest("Email wrong");
  }
  const hashPassword = user.password;
  const compareResult = bcrypt.compareSync(password, hashPassword);
  if (!compareResult) {
    throw new BadRequest("Password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const { SECRET_KEY } = process.env;

  const token = jwt.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });
  res.json({ token });
};

// const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne(email);
//     if (!user || !user.cmparePassword(password)) {
//       return res.status(400).json({
//         status: "error",
//         code: 400,
//         message: "Email or password is wrong",
//       });
//     }
//     const hashPassword = user.password;
//     const compareResult = bcrypt.compareSync(password, hashPassword);
//     if (!compareResult) {
//       return res.status(400).json({
//         status: "error",
//         code: 400,
//         message: "Email or password is wrong",
//       });
//     }
//     const token = "sdvsfdvv";
//     res.json({ token });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = login;
