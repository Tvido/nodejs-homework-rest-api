const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ message: "list" });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "item" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "replace" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "deleted" });
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "updated" });
});

module.exports = router;
