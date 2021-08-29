const { User } = require("../../models");

const login = async (req, res, next) => {
  try {
    const user = await User.findByEmail(req.body.email);
    const isValidPassword = await user?.isValidPassword(req.body.password);
    if (!user || !isValidPassword) {
      res.status(401).json({ user });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = login;
