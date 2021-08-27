const express = require("express");
const router = express.Router();

// const { joiContactSchema } = require("../../validation");
// const contactsOperations = require("../../model/contactsData");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", ctrl.add);

router.put("/:contactId", ctrl.update);

router.delete("/:contactId", ctrl.remove);

module.exports = router;
