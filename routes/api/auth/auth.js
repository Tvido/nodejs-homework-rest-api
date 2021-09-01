const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../../models/user");
const { validation } = require("../../../middleware");
const { auth: ctrl } = require("../../../controllers");

const userValidationMiddleware = validation(joiSchema);

router.post("/users/signup", userValidationMiddleware, ctrl.signup);
router.post("/users/login", userValidationMiddleware, ctrl.login);

module.exports = router;
