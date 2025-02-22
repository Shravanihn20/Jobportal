import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 2,
        backgroundColor: "#E6E4FA", // Light Lavender (Softer Look)
        color: "#333", // Dark Gray for better readability
      }}
    >
      <Typography variant="body1">&copy; 2025 Admin Dashboard</Typography>
    </Box>
  );
};

export default Footer;

