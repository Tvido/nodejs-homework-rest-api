const express = require("express");
const router = express.Router();

const { joiContactSchema } = require("../../../model");
const { validation } = require("../../../middleware");
const ctrl = require("../../../controllers/contacts");

const validationmiddleware = validation(joiContactSchema);

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", validationmiddleware, ctrl.add);

router.put("/:contactId", ctrl.update);

router.delete("/:contactId", ctrl.remove);

module.exports = router;
