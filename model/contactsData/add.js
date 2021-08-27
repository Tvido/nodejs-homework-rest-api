const { v4 } = require("uuid");

const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const add = async (data) => {
  try {
    const newContact = { ...data, id: v4() };
    const contacts = await listContacts();
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
