// const contactsOperations = require("../../model/contacts");
// const { joiContactSchema } = require("../../validation");

// const bcrypt = require("bcryptjs");

const { User } = require("../../models");

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(email);
    // const user = await User.findByEmail(req.body.email);

    if (user) {
      // res.status(200).json({ user });
      res.status(409).json({
        status: "error",
        code: 409,
        message: "Email in use",
      });
    }

    // const hashPassword = bcrypt.hashSync(password, bcrypt.getSaltSynch(10));
    // const result = await User.create({ email, password: hashPassword });

    const newUser = new User({ email });
    newUser.setPassword(password);
    await newUser.save();

    res.status(201).json({
      status: "success",
      code: 201,
      message: "Success register",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;

// const contactsOperations = require("../../model/contacts");

// const { joiContactSchema } = require("../../validation");

// const { User } = require("../../models");

// const signup = async (req, res, next) => {
//   try {
//     const user = await User.findByEmail(req.body.email);
//     if (user) {
//       res.status(200).json({ user });
//     }
//     const { id, name, email } = await User.created(req.body);
//     res.status(201).json({ id, name, email });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = signup;
