import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    if (!title || !author || !category || !serialNo) {
      setError("All fields are required.");
      setSuccess("");
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/books/add", {
          title,
          author,
          serial_no: serialNo,
          type: category,
        });

        if (response.status === 200) {
          setSuccess("Book added successfully!");
          setError("");
          setTitle("");
          setAuthor("");
          setCategory("");
          setSerialNo("");
        }
      } catch (err) {
        console.error("Error while adding book:", err);
        setError("Error adding book. Please try again.");
        setSuccess("");
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Book
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Author"
            variant="outlined"
            fullWidth
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Serial Number"
            variant="outlined"
            fullWidth
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
          />
        </Grid>

        {error && (
          <Grid item xs={12}>
            <Typography color="error">{error}</Typography>
          </Grid>
        )}
        {success && (
          <Grid item xs={12}>
            <Typography color="primary">{success}</Typography>
          </Grid>
        )}

        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Add Book
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddBook;
