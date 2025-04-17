import React from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";

const UpdateMembership = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Update Membership
        </Typography>
        <TextField
          label="Membership ID"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Updated Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Updated Duration (in months)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Updated Fee"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Update Membership
        </Button>
      </Paper>
    </Container>
  );
};

export default UpdateMembership;
