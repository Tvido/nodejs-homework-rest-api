const updateContacts = require("./updateContacts");
const getAll = require("./getAll");

const del = async (id) => {
  try {
    const contacts = await getAll();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      throw new Error(`Contact with id=${id} not found`);
    }
    const newContacts = contacts.filter((item) => item.id !== id);
    await updateContacts(newContacts);
    return contacts[idx];
  } catch (err) {
    throw err;
  }
};

module.exports = del;
