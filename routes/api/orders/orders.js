const express = require("express");
const router = express.Router();

const { joiSchema } = require("../../../models/order");
const {
  validation,
  controllerWrapper,
  authenticate,
} = require("../../../middleware");
const { orders: ctrl } = require("../../../controllers");

const orderValidationMiddleware = validation(joiSchema);

router.get("/", controllerWrapper(authenticate), ctrl.getAll);

router.post(
  "/",
  controllerWrapper(authenticate),
  orderValidationMiddleware,
  controllerWrapper(ctrl.add)
);

module.exports = router;
