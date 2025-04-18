import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";

const ReturnBook = () => {
  const [bookName, setBookName] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");

  const handleReturn = () => {
    if (!bookName || !returnDate) {
      setError("All fields are required.");
    } else {
      alert("Book returned successfully!");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Return Book
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Book Name"
            variant="outlined"
            fullWidth
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Return Date"
            variant="outlined"
            fullWidth
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </Grid>
        {error && (
          <Grid item xs={12}>
            <Typography color="error">{error}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleReturn}
          >
            Return Book
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReturnBook;
