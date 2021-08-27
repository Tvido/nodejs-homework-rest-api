const fs = require("fs/promises");

const filePath = require("./filePath");

const getAll = async () => {
  try {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    throw err;
  }
};

module.exports = getAll;
