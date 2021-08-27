const { v4 } = require("uuid");

const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const add = async (body) => {
  try {
    const newContact = { id: v4(), ...body };
    const contacts = await listContacts();
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
