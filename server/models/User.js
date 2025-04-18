
const express = require("express");
const router = express.Router();
const db = require("../db");

// Fetch all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// Add a new user
router.post("/add", (req, res) => {
  const { username, role } = req.body;
  if (!username || !role)
    return res.status(400).json({ message: "All fields are required" });

  const sql = "INSERT INTO users (username, role) VALUES (?, ?)";
  db.query(sql, [username, role], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User added successfully." });
  });
});

module.exports = router;
