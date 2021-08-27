const fs = require("fs/promises");

const filePath = require("./filePath");

const updateContacts = async (contacts) => {
  const contuctsString = JSON.stringify(contacts);
  await fs.writeFile(filePath, contuctsString);
};

module.exports = updateContacts;
