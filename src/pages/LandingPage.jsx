import { Link } from "react-router-dom";
import { Button, Typography, Container } from "@mui/material";

function LandingPage() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Todo App
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Organize your tasks efficiently
      </Typography>
      <Button component={Link} to="/login" variant="contained" sx={{ mr: 2 }}>
        Login
      </Button>
      <Button component={Link} to="/signup" variant="outlined">
        Sign Up
      </Button>
    </Container>
  );
}

export default LandingPage;
