const updateContacts = require("./updateContacts");
const getAll = require("./getAll");

const update = async (id, updateInfo) => {
  try {
    const contacts = await getAll();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      throw new Error(`COntact with id=${id} not found`);
    }
    contacts[idx] = { ...contacts[idx], ...updateInfo };
    await updateContacts(contacts);
    return contacts[idx];
  } catch (err) {
    throw err;
  }
};

module.exports = update;
