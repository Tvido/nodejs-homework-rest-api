const contactsOperations = require("../../model/contactsData");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsOperations.getById(contactId);
    if (!contact) {
      res.status(404).json({ message: "Not found" });
    }

    res.json({
      contact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
