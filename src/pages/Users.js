import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CircularProgress, Alert, Grid } from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Different API
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch users");
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Users List</h2>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="textSecondary">{user.email}</Typography>
                <Typography variant="body2">📍 {user.address.city}</Typography>
                <Typography variant="body2">🏢 {user.company.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Users;

