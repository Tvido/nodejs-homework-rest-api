const contactsOperations = require("../../model/contactsData");

const { joiContactSchema } = require("../../validation");

const add = async (req, res, next) => {
  try {
    const { error } = joiContactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: "Missing required name field",
      });
    }

    const newContact = await contactsOperations.add(req.body);
    res.status(201).json({ newContact });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
