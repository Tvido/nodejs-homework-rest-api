const contactsOperations = require("../../model/contactsData");

const listContacts = async (__, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({
      contacts,
    });
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
