const contactsOperations = require("../../model/contactsData");

const { joiContactSchema } = require("../../validation");

const update = async (req, res, next) => {
  try {
    const { error } = joiContactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: "missing fields",
      });
    }

    const { id } = req.params;
    const updateContact = await contactsOperations.update(id, req.body);
    if (!updateContact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({ updateContact });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
