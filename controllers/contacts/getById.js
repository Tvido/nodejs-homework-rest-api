const data = require("../../contactsData");

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await data.getById(id);
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contact,
      },
    });
  } catch (error) {}
};

module.exports = getById;
