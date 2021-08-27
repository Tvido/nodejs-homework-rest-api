const express = require("express");
const router = express.Router();

const { joiContactSchema } = require("../../validation");
const contactsOperations = require("../../model/contactsData");

// const contacts = require("../../model");

// const { contacts: ctrl } = require("../../controllers");

// console.log(ctrl);

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({
      contacts,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsOperations.getById(id);
    if (!contact) {
      res.status(404).json({ message: "Not found" });
    }

    res.json({
      contact,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = joiContactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        message: "Missing required name field",
      });
    }

    const newContact = await contactsOperations.add(req.body);
    res.status(201).json({ newContact });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
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
});

router.delete("/:contactId", async (req, res, next) => {
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
});

module.exports = router;
