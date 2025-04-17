const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Dummy users with roles
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user1", password: "user123", role: "user" },
];

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password is correct
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create JWT token
  const token = jwt.sign(
    { username: user.username, role: user.role },
    "your_secret_key",
    { expiresIn: "1h" }
  );

  // Send token and user data back
  res.json({ token, user: { username: user.username, role: user.role } });
});

module.exports = router;
