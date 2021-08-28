const contactsOperations = require("../../model/contacts");

const { joiContactSchema } = require("../../validation");

const update = async (req, res, next) => {
  try {
    const { error } = joiContactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: error.message,
      });
    }

    const { contactId } = req.params;
    const updateContact = await contactsOperations.update(contactId, req.body);
    if (!req.body) {
      return res.status(404).json({ message: "missing fields" });
    }
    res.json({ updateContact });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
