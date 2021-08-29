// const contactsOperations = require("../../model/contacts");
const { Contact } = require("../../models");

const listContacts = async (__, res, next) => {
  try {
    // const contacts = await contactsOperations.listContacts();
    const contacts = await Contact.find({});
    res.json({
      contacts,
    });
    // res.json({
    //   status: "success",
    //   code: 200,
    //   data: {
    //     result: contacts,
    //   },
    // });
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
