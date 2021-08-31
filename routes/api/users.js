const express = require("express");
const router = express.Router();

// const { joiContactSchema } = require("../../../model");
// const { validation } = require("../../../middleware");
const ctrl = require("../../../controllers/users");
const { joiSchema } = require("../../middleware");
const { validation } = require("../../validation");

const validationmiddleware = validation(joiSchema);

// router.get("/", ctrl.listContacts);

// router.get("/:contactId", ctrl.getById);

router.post("/signup", validationmiddleware, ctrl.signup);
router.post("/login", validationmiddleware, ctrl.login);
// router.get("/logout", ctrl.logout);

// router.put("/:contactId", ctrl.update);

// router.delete("/:contactId", ctrl.remove);

module.exports = router;
