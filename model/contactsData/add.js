const { v4 } = require("uuid");

const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const add = async (data) => {
  try {
    const newContact = { ...data, id: v4() };
    const contacts = await getAll();
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (err) {
    await updateContacts;
    throw err;
  }
};

module.exports = add;
