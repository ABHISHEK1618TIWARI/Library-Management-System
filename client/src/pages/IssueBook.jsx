import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";

const IssueBook = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!bookName || !authorName || !issueDate || !returnDate) {
      setError("All fields are required.");
    } else {
      // Issue book logic (e.g., API call)
      alert("Book issued successfully!");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Issue Book
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
        <Grid item xs={12} sm={6}>
          <TextField
            label="Author Name"
            variant="outlined"
            fullWidth
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Issue Date"
            variant="outlined"
            fullWidth
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
            onClick={handleSubmit}
          >
            Issue Book
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IssueBook;
