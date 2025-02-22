import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    // Simulate authentication (replace with API call if needed)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("auth", "true");
      onLogin();
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card style={{ width: 400, padding: 20 }}>
        <CardContent>
          <Typography variant="h5" align="center">Admin Login</Typography>
          {error && <Typography color="error" align="center">{error}</Typography>}
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: 10 }}>
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

