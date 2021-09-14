const express = require("express");
const router = express.Router();

const { joiContactSchema } = require("../../../models/contact");
const { validation, controllerWrapper } = require("../../../middleware");
const ctrl = require("../../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", controllerWrapper(ctrl.getById));

router.post("/", validation(joiContactSchema), controllerWrapper(ctrl.add));

router.put("/:contactId", controllerWrapper(ctrl.update));

router.delete("/:contactId", controllerWrapper(ctrl.remove));

router.patch("/:contactId/favorite", validation, ctrl.updateStatusContact);

module.exports = router;
