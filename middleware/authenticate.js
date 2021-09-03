const jwt = require("jsonwebtoken");
const { Unautorized } = require("http-errors");
const { User } = require("../models");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(" ");
    if (bearer !== "Bearer") {
      throw new Unautorized();
    }
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findOne({ token });

    if (!user) {
      throw new Unautorized();
    }
    req.user = user;
    next();
  } catch (error) {
    throw new Unautorized(error.message);
  }
};

module.exports = authenticate;
