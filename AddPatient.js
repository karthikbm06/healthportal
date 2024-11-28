// src/components/AddPatient.js
import React, { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [condition, setCondition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const patientData = { name, age, condition };

    try {
      const response = await fetch('http://127.0.0.1:5000/add-patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error adding patient:', error);
      alert('Failed to add patient. Please try again.');
    }
  };

  return (
    <Box className="add-patient-form">
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Patient
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <TextField
          label="Condition"
          variant="outlined"
          fullWidth
          margin="normal"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddPatient;