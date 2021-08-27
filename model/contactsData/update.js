const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const update = async (id, updateInfo) => {
  try {
    const contacts = await listContacts();
    const indx = contacts.findIndx((item) => item.id === id);
    if (indx === -1) {
      return null;
    }
    contacts[indx] = { ...contacts[indx], ...updateInfo };
    await updateContacts(contacts);
    return contacts[indx];
  } catch (err) {
    throw err;
  }
};

module.exports = update;
