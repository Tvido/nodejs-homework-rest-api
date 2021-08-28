// const contactsOperations = require("../../model/contacts");

// const { joiContactSchema } = require("../../validation");

const { Contact } = require("../../models");

const updateStatusContact = async (req, res, next) => {
  try {
    // const { error } = joiContactSchema.validate(req.body);
    // if (error) {
    //   res.status(400).json({
    //     message: error.message,
    //   });
    // }

    const { contactId } = req.params;
    const { favorite } = req.body;
    // const updateContact = await contactsOperations.update(contactId, req.body);
    const updateContact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );
    // if (!req.body) {
    if (!updateContact) {
      return res.status(404).json({ message: "missing fields favorite" });
    }
    res.json({ updateContact });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
