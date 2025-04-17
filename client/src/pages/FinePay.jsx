import React from "react";
import { Container, Typography, Paper, TextField, Button } from "@mui/material";

const FinePay = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Pay Fine
        </Typography>
        <TextField
          label="User ID"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount to Pay"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Reason for Fine"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Pay Now
        </Button>
      </Paper>
    </Container>
  );
};

export default FinePay;
