const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

/* ADD BOOK */
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch {
    res.status(400).json({ message: "Error adding book" });
  }
});

/* GET ALL BOOKS */
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

/* DELETE BOOK */
router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;