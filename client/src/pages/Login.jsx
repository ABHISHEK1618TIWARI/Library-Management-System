import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure it's imported correctly
import axios from "axios";
import { TextField, Button, Container, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );

      console.log("API Response:", response.data); // Debugging line

      if (response.data && response.data.token) {
        // Store JWT token and user role
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", response.data.user.role);

        // Navigate based on user role
        if (response.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else if (response.data.user.role === "user") {
          navigate("/user-dashboard");
        }
      } else {
        setError("Invalid credentials or server error.");
      }
    } catch (err) {
      console.error("Login failed:", err); // Log the error
      setError("Login failed. Invalid credentials or server error.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
