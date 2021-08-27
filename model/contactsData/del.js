const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const del = async (id) => {
  try {
    const contacts = await listContacts();
    const indx = contacts.findIndex((item) => item.id === id);
    if (indx === -1) {
      return null;
    }
    const newContacts = contacts.filter((item) => item.id !== id);
    await updateContacts(newContacts);
    return contacts[indx];
  } catch (err) {
    throw err;
  }
};

module.exports = del;
