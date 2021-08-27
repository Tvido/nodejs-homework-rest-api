const data = require("../../contactsData");

const listContacts = async (req, res) => {
  try {
    const contacts = await data.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {}
};

module.exports = listContacts;
