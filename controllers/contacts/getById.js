// const contactsOperations = require("../../model/contacts");

const { Contact } = require("../../models");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    // const contact = await contactsOperations.getById(contactId);
    const contact = await Contact.findById(contactId);
    // console.log(contact);
    if (!contact) {
      res.status(404).json({ message: "Not found" });
    }

    res.json({
      contact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
