const express = require("express");
const router = express.Router();
const Book = require("../models/author");

// All Books Route
router.get("/", async (req, res) => {
  res.send("all books");
});

// New Book Route
router.get("/new", (req, res) => {
  res.send("new book");
});

// Create Book Route
router.post("/", async (req, res) => {
  res.send("create");
});

module.exports = router;
