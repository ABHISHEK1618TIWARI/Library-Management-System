import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const addUser = async () => {
    if (!username || !password || !role) {
      return alert("All fields are required.");
    }
    try {
      await axios.post("http://localhost:5000/api/users/add", {
        username,
        password,
        role,
      });
      setUsername("");
      setPassword("");
      setRole("");
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          User Management
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="admin or user"
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={addUser}
              fullWidth
            >
              Add
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Existing Users
        </Typography>
        <List>
          {users.map((user) => (
            <ListItem key={user.id} divider>
              <ListItemText primary={`${user.username} (${user.role})`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default UserManagement;
