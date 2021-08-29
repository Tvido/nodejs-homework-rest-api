// const contactsOperations = require("../../model/contacts");

// const { joiContactSchema } = require("../../validation");

const { User } = require("../../models");

const signup = async (req, res, next) => {
  try {
    const user = await User.findByEmail(req.body.email);
    if (user) {
      res.status(200).json({ user });
    }
    const { id, name, email } = await User.created(req.body);
    res.status(201).json({ id, name, email });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
