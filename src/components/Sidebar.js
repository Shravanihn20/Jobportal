import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Collapse, Toolbar } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240; // Sidebar width

const Sidebar = () => {
  const [openDashboard, setOpenDashboard] = useState(false);

  const handleDashboardClick = () => {
    setOpenDashboard(!openDashboard);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          top: 64, // Push below navbar
          height: "calc(100vh - 64px)", // Full height without overlapping navbar
          backgroundColor: "#E6E0FA", // Light Purple (Softer Theme)
          color: "black",
        },
      }}
    >
      {/* Push content below navbar */}
      <Toolbar />

      {/* Sidebar Links */}
      <List>
        {/* Dashboard (Dropdown) */}
        <ListItem button onClick={handleDashboardClick} sx={{ textAlign: "center" }}>
          <ListItemText primary="Dashboard" sx={{ fontWeight: "bold", color: "black" }} />
          {openDashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        {/* Dropdown Menu Items */}
        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ paddingLeft: 2 }}>
            {[
              { name: "Employees", path: "/employees" },
              { name: "Users", path: "/users" },
              { name: "Vacancies", path: "/vacancies" },
              { name: "Contacts", path: "/contacts" },
            ].map((item) => (
              <ListItem
                button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  "&:hover": { backgroundColor: "#D8D3FC" }, // Lighter hover effect
                  textAlign: "center",
                }}
              >
                <ListItemText primary={item.name} sx={{ color: "black" }} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
