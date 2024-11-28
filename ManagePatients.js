import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, TextField, List, ListItem, ListItemText } from '@mui/material';

const ManagePatients = ({ patients, setPatients }) => { // Accept patients and setPatients as props
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [condition, setCondition] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Step 1: Fetch Patients on Component Mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/manage-patients');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPatients(data); // Update the shared state with fetched patients
      } catch (error) {
        console.error('Error fetching patients:', error);
        alert('Failed to fetch patients. Please try again.');
      }
    };

    fetchPatients();
  }, [setPatients]); // Added setPatients as a dependency

  // Step 2: Handle Patient Addition
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
      if (!response.ok) {
        throw new Error('Failed to add patient');
      }
      const data = await response.json();
      alert(data.message);
      setPatients([...patients, { ...patientData, _id: data._id }]); // Update the shared state
      resetForm();
    } catch (error) {
      console.error('Error adding patient:', error);
      alert('Failed to add patient. Please try again.');
    }
  };

  // Step 3: Reset Form Fields
  const resetForm = () => {
    setName('');
    setAge('');
    setCondition('');
    setSelectedPatient(null);
  };

  // Step 4: Handle Patient Selection
  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setName(patient.name);
    setAge(patient.age);
    setCondition(patient.condition);
  };

  // Step 5: Handle Patient Update
  const handleUpdatePatient = async (e) => {
    e.preventDefault();
    const updatedPatientData = { name, age, condition };

    try {
      const response = await fetch(`http://127.0.0.1:5000/update-patient/${selectedPatient._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPatientData),
      });
      if (!response.ok) {
        throw new Error('Failed to update patient');
      }
      const data = await response.json();
      alert(data.message);
      setPatients((prev) => prev.map((p) => (p._id === selectedPatient._id ? { ...p, ...updatedPatientData } : p)));
      resetForm();
    } catch (error) {
      console.error('Error updating patient:', error);
      alert('Failed to update patient. Please try again.');
    }
  };

  // Step 6: Handle Patient Deletion
  const handleDeletePatient = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete-patient/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete patient');
      }
      const data = await response.json();
      alert(data.message);
      setPatients((prev) => prev.filter((patient) => patient._id !== id));
    } catch (error) {
      console.error('Error deleting patient:', error);
      alert('Failed to delete patient. Please try again.');
    }
  };

  // Step 7: Render the Component
  return (
    <Box className="manage-patients-form">
      <Typography variant="h4" component="h1" gutterBottom>
        Manage Patients
      </Typography>
      <form onSubmit={selectedPatient ? handleUpdatePatient : handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={ name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          margin="normal"
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
        <Button type="submit" variant="contained" color="primary">
          {selectedPatient ? 'Update Patient' : 'Add Patient'}
        </Button>
      </form>

      <List>
        {patients.map((patient) => (
          <ListItem key={patient._id} button onClick={() => handleSelectPatient(patient)}>
            <ListItemText primary={`${patient.name} - ${patient.age} - ${patient.condition}`} />
            <Button onClick={() => handleDeletePatient(patient._id)} color="secondary">
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ManagePatients;