const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// const { DB_HOST } = process.env;

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, _, res, next) => {
  res.status(500).json({ message: error.message });
});

module.exports = app;
