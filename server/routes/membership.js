// server/routes/membership.js

const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all memberships
router.get("/", (req, res) => {
  db.query("SELECT * FROM memberships", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// Add a new membership
router.post("/add", (req, res) => {
  const { name, duration, fee } = req.body;
  if (!name || !duration || !fee)
    return res.status(400).json({ message: "All fields are required." });

  const sql = "INSERT INTO memberships (name, duration, fee) VALUES (?, ?, ?)";
  db.query(sql, [name, duration, fee], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Membership added successfully." });
  });
});

module.exports = router;
