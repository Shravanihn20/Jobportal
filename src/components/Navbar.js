import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout, isAuthenticated }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#F8C8C8", // Light Pink (Soft Theme)
        zIndex: 1300, // Ensures navbar is above sidebar
        height: 64, // Standard navbar height
        display: "flex",
        justifyContent: "center",
        paddingX: 2,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
          Admin Dashboard
        </Typography>

        {/* Dashboard Dropdown - Visible when authenticated */}
        {isAuthenticated && (
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Dashboard Button with Dropdown */}
            <Button
              sx={{ color: "black", "&:hover": { color: "#D84040" } }}
              onClick={handleMenuOpen}
            >
              Dashboard
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: 1 }}
            >
              <MenuItem component={Link} to="/employees" onClick={handleMenuClose}>
                Employees
              </MenuItem>
              <MenuItem component={Link} to="/users" onClick={handleMenuClose}>
                Users
              </MenuItem>
              <MenuItem component={Link} to="/vacancies" onClick={handleMenuClose}>
                Vacancies
              </MenuItem>
              <MenuItem component={Link} to="/contacts" onClick={handleMenuClose}>
                Contacts
              </MenuItem>
            </Menu>

            {/* Logout Button */}
            <Button
              sx={{
                color: "black",
                "&:hover": { color: "#D84040" },
              }}
              onClick={onLogout}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
