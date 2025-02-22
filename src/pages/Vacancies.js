import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText, CircularProgress, Alert, Typography } from "@mui/material";

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // ✅ 100% Working API
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch vacancies");
        return response.json();
      })
      .then((data) => {
        // Simulating job data with users
        const formattedVacancies = data.map(user => ({
          id: user.id,
          title: `Software Engineer at ${user.company.name}`,
          companyName: user.company.name,
          location: user.address.city,
        }));

        setVacancies(formattedVacancies);
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
      <h2>Available Vacancies</h2>
      <List>
        {vacancies.map((job) => (
          <ListItem key={job.id} divider>
            <ListItemText 
              primary={<Typography variant="h6">{job.title}</Typography>} 
              secondary={`Company: ${job.companyName} | Location: ${job.location}`} 
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Vacancies;
