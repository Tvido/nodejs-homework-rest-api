const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../../models/user");
const {
  validation,
  controllerWrapper,
  authenticate,
  uploadMiddleware,
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

router.patch(
  "/avatars/:id",
  uploadMiddleware.single("image"),
  controllerWrapper(ctrl.updateImg)
);

router.get("/verify/:verificationToken", controllerWrapper(ctrl.verification));

router.post("/verify", controllerWrapper(ctrl.verification));

module.exports = router;
