const express = require("express");

const { joiSchema } = require("../../../models/user");
const { validation } = require("../../../middleware");
const { ctrl } = require("../../../controllers");

const userValidationMiddleware = validation(joiSchema);

const router = express.Router();

router.post("/users/signup", userValidationMiddleware, ctrl.signup);
router.post("/users/login", userValidationMiddleware, ctrl.login);
// router.get("/users/logout", userValidationMiddleware, ctrl.logout);
// router.get("/users/current", userValidationMiddleware, ctrl.logout);

module.exports = router;
