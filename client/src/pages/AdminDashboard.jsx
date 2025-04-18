import React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Admin Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Add Book
            </Typography>
            <Button variant="contained" onClick={() => navigate("/add-book")}>
              Go
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              User Management
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/user-management")}
            >
              Go
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Add Membership
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/add-membership")}
            >
              Go
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Update Membership
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/update-membership")}
            >
              Go
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
