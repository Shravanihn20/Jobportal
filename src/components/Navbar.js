import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = ({ onLogout, isAuthenticated }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#D84040", zIndex: 1300 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        {isAuthenticated && <Button color="inherit" onClick={onLogout}>Logout</Button>}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
