const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { contactsRouter, authRouter, ordersRouter } = require("./routes/api");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/users/auth", authRouter);
app.use("/api/orders", ordersRouter);

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

app.use((error, _, res, next) => {
  const { code = 500, message = "Server error" } = error;
  res.status(500).json({
    status: "Fail",
    code,
    message,
  });
});

module.exports = app;
