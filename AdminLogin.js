// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Fade } from '@mui/material';
import './AdminLogin.css'; // Import custom styles

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials
    if (username === 'admin' && password === 'admin') {
      navigate('/admin-details');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Fade in timeout={1000}>
        <Box className="login-box">
          <Typography variant="h4" component="h2" gutterBottom>
            Admin Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
            {error && <Typography color="error" className="error-message">{error}</Typography>}
          </form>
        </Box>
      </Fade>
    </Container>
  );
};

export default AdminLogin;