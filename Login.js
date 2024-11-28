import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        alert('Login successful!');
        navigate('/main'); // Redirect to the Main component
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed. Please try again.');
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the SignUp component
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="container">
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        {error && <Typography className="error">{error}</Typography>}
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
          <Button 
            onClick={handleSignUp} 
            variant="outlined" 
            color="secondary" 
            fullWidth 
            style={{ marginTop: '10px' }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;