// const contactsOperations = require("../../model/contacts");
// const { joiContactSchema } = require("../../validation");
// const bcrypt = require("bcryptjs");
const { User } = require("../../models");

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Email in use",
      });
    }
    res.status(201).json({
      status: "success",
      code: 201,
      message: "Success register",
    });
  } catch (error) {
    // const result = await User.create({ email, password });
    next(error);
  }
};

module.exports = signup;
