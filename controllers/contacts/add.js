// const contactsOperations = require("../../model/contacts");

// const { joiContactSchema } = require("../../validation");

const { Contact } = require("../../models");

const add = async (req, res, next) => {
  try {
    // const { error } = joiContactSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({
    //     message: "Missing required name field",
    //   });
    // }

    // const newContact = await contactsOperations.add(req.body);
    // res.status(201).json({ newContact });
    const result = await Contact.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
