import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            color: "secondary.main",
          }}
        >
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <Typography variant="h6">Marverse</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
