
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const auth = require("./routes/auth");
const books = require("./routes/books"); // 
const membershipRoutes = require("./routes/membership");

const users = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/books", books);
app.use("/api/users", users);
app.use("/api/memberships", membershipRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
