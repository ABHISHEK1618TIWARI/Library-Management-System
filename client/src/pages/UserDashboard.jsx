import React from "react";
import { Container, Typography, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        User Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              View Available Books
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/search-books")}
            >
              Go
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Issue Book
            </Typography>
            <Button variant="contained" onClick={() => navigate("/issue-book")}>
              Go
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Return Book
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/return-book")}
            >
              Go
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Pay Fine
            </Typography>
            <Button variant="contained" onClick={() => navigate("/fine-pay")}>
              Go
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => navigate("/")}
          >
            Log Out
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
