const express = require("express");
const router = express.Router();
const Author = require("../models/author");
const Book = require("../models/book");

// All Books Route
router.get("/", async (req, res) => {
  res.send("all books");
});

// New Book Route
router.get("/new", async (req, res) => {
  try {
    const authors = await Author.find({});
    const book = new Book();
    res.render("books/new", {
      authors: authors,
      book: book
    });
  } catch (err) {
    res.redirect("/books");
  }
});

// Create Book Route
router.post("/", async (req, res) => {
  res.send("create");
});

module.exports = router;
