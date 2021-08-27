const contactsOperations = require("../../model/contactsData");

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteContact = await contactsOperations.del(id);
    if (!deleteContact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
