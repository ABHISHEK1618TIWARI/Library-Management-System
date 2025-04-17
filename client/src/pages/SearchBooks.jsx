import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import debounce from "lodash.debounce"; // Import debounce from lodash

const SearchBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  // Create debounced function using lodash.debounce
  const fetchSuggestions = debounce(async (query) => {
    if (!query) return;
    try {
      const res = await fetch(
        `http://localhost:5000/api/books/search?keyword=${query}`
      );
      const data = await res.json();
      setSearchResults(data);
      setError("");
    } catch (err) {
      setError("Error fetching suggestions");
      console.error(err);
    }
  }, 300);

  const handleSearch = () => {
    if (!searchQuery) {
      setError("Please enter a book name or author.");
      return;
    }
    fetchSuggestions(searchQuery); // Trigger the search
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Search Books
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Search by Book Name or Author"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((book, index) => (
                <li key={index}>
                  <Typography variant="body1">
                    {book.title} - {book.author}
                  </Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Typography>No books found.</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBooks;
