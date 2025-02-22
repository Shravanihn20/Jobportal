import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText, CircularProgress, Alert, Typography } from "@mui/material";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // ✅ Reliable Contact API
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch contacts");
        return response.json();
      })
      .then((data) => {
        const formattedContacts = data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          company: user.company.name,
        }));

        setContacts(formattedContacts);
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
      <h2>Contacts</h2>
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id} divider>
            <ListItemText 
              primary={<Typography variant="h6">{contact.name}</Typography>} 
              secondary={`📧 Email: ${contact.email} | 📞 Phone: ${contact.phone} | 🏢 Company: ${contact.company}`} 
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Contacts;

