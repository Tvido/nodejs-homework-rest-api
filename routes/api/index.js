const authRouter = require("./auth/auth");
const contactsRouter = require("./contacts/contacts");
const ordersRouter = require("./orders/orders");

module.exports = {
  contactsRouter,
  authRouter,
  ordersRouter,
};
