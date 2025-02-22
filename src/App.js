import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Employees from "./pages/Employees";
import Users from "./pages/Users";
import Vacancies from "./pages/Vacancies";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import { Box, Container } from "@mui/material";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    setIsAuthenticated(auth);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Show Sidebar only if authenticated */}
        {isAuthenticated && <Sidebar />}

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          {/* Navbar at the top */}
          <Navbar onLogout={handleLogout} isAuthenticated={isAuthenticated} />

          {/* Main content area with padding and margin to avoid overlap */}
          <Container sx={{ flexGrow: 1, marginTop: "80px", padding: "20px" }}>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              {isAuthenticated ? (
                <>
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/vacancies" element={<Vacancies />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="*" element={<Navigate to="/employees" />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
            </Routes>
          </Container>

          {/* Footer at the bottom */}
          <Footer />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
