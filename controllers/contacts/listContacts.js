const { Contact } = require("../../models");

const listContacts = async (__, res, next) => {
  try {
    const contacts = await Contact.find({});
    res.json({
      contacts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
