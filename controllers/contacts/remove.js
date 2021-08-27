const contactsOperations = require("../../model/contactsData");

const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const deleteContact = await contactsOperations.del(contactId);
    if (!deleteContact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      deleteContact,
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
