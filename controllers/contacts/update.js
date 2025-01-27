const { Contact } = require("../../models");

const update = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updateContact = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!updateContact) {
      return res.status(404).json({ message: "missing fields" });
    }
    res.json({ updateContact });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
