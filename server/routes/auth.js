const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

//Token
  const token = jwt.sign(
    { username: user.username, role: user.role },
    "your_secret_key",
    { expiresIn: "1h" }
  );

  
 
});

module.exports = router;
