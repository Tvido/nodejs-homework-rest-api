const data = require("../../contactsData");

const getAll = async (req, res) => {
  try {
    const contacts = await data.getAll();
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {}
};

module.exports = getAll;
