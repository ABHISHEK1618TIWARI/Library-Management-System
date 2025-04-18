import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import debounce from "lodash.debounce";

const SearchBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAvailableBooks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/books/available");
        const data = await res.json();
        setAvailableBooks(data);
      } catch (err) {
        console.error("Failed to fetch available books:", err);
      }
    };
    fetchAvailableBooks();
  }, []);

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
    fetchSuggestions(searchQuery);
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        fontWeight="bold"
      >
        📚 Search & Explore Books
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 5 }}>
        <Grid container spacing={2}>
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
              size="large"
            >
              🔍 Search
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {searchQuery && (
        <div>
          <Typography variant="h5" gutterBottom>
            🔎 Search Results
          </Typography>
          <Grid container spacing={3}>
            {searchResults.length > 0 ? (
              searchResults.map((book, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper elevation={4} sx={{ p: 2, height: "100%" }}>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      by {book.author}
                    </Typography>
                  </Paper>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography>No books found.</Typography>
              </Grid>
            )}
          </Grid>
        </div>
      )}

      <Divider sx={{ my: 5 }} />

      <Typography variant="h5" gutterBottom>
        ✅ Available Books
      </Typography>
      <Grid container spacing={3}>
        {availableBooks.length > 0 ? (
          availableBooks.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={4} sx={{ p: 2, height: "100%" }}>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  by {book.author}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography>No available books.</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default SearchBooks;
