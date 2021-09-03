const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../../models/user");
const {
  validation,
  controllerWrapper,
  authenticate,
} = require("../../../middleware");
const { auth: ctrl } = require("../../../controllers");

const userValidationMiddleware = validation(joiSchema);

router.post(
  "/users/signup",
  userValidationMiddleware,
  controllerWrapper(ctrl.signup)
);

router.post(
  "/users/login",
  userValidationMiddleware,
  controllerWrapper(ctrl.login)
);

router.get(
  "/users/logout",
  controllerWrapper(authenticate),
  controllerWrapper(ctrl.logout)
);

module.exports = router;
