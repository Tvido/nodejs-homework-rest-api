const bcrypt = require("bcryptjs");

const { User } = require("../../models");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(email);
    if (!user) {
      return res.status(400).json({
        status: "error",
        code: 409,
        message: "Email or password is wrong",
      });
    }
    const hashPassword = user.password;
    const compareResult = bcrypt.compareSync(password, hashPassword);
    if (!compareResult) {
      return res.status(400).json({
        status: "error",
        code: 409,
        message: "Email or password is wrong",
      });
    }
    const token = "sdvsfdvv";
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
