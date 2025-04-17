// server/routes/books.js

const express = require("express");
const router = express.Router();
const db = require("../db"); // Adjust the path if necessary

// Add Book
router.post("/add", (req, res) => {
  const { title, author, serial_no, type } = req.body;
  if (!title || !author || !serial_no || !type)
    return res.status(400).json({ message: "All fields are required." });

  const sql =
    "INSERT INTO books (title, author, serial_no, type) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, author, serial_no, type], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Book added successfully." });
  });
});

// Search Books
router.get("/search", (req, res) => {
  const { keyword } = req.query;
  const sql =
    "SELECT * FROM books WHERE title LIKE ? OR author LIKE ? OR serial_no LIKE ?";
  const query = `%${keyword}%`;
  db.query(sql, [query, query, query], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

module.exports = router;
