import React, { useState } from "react";
import axios from "axios";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";

const AddMembership = () => {
  const [form, setForm] = useState({
    user_id: "",
    type: "",
    start_date: "",
    end_date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/memberships/add",
        form
      );
      alert(res.data.message);
      setForm({ user_id: "", type: "", start_date: "", end_date: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding membership");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Add Membership
        </Typography>
        <TextField
          label="User ID"
          name="user_id"
          value={form.user_id}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Membership Type"
          name="type"
          value={form.type}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Start Date"
          name="start_date"
          value={form.start_date}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          name="end_date"
          value={form.end_date}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          margin="normal"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Add Membership
        </Button>
      </Paper>
    </Container>
  );
};

export default AddMembership;
