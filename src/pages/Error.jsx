import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";

function ErrorPage() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Go to Home
      </Button>
    </Container>
  );
}

export default ErrorPage;
