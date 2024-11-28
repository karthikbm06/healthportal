import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './components/Main'; // Adjust the path as necessary
import AdminLogin from './components/AdminLogin';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminDetails from './components/AdminDetails';
import AddPatient from './components/AddPatient';
import Services from './components/Services';
import DoctorInfo from './components/DoctorInfo'; // Create this component
import PatientInfo from './components/PatientInfo'; // Create this component
import Availability from './components/Availability'; // Create this component
import Home from './components/Home';
import ImageButtonDemo from './ImageButtonDemo';
import ManagePatients from './components/ManagePatients'; // Import ManagePatients

function App() {
  const [patients, setPatients] = useState([]); // Step 1: Create state for patients

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/main" element={<Main />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-details" element={<AdminDetails patients={patients} setPatients={setPatients} />} />  // Step 2: Pass the state and setter to AdminDetails
        <Route path="/add-patient" element={<AddPatient patients={patients} setPatients={setPatients} />} />  // Step 2: Pass the state and setter to AddPatient
        <Route path="/services" element={<Services />} />
        <Route path="/Doctorinfo" element={<DoctorInfo />} />
        <Route path="/Patientinfo" element={<PatientInfo patients={patients} />} />  // Step 2: Pass the state to PatientInfo
        <Route path="/Availability" element={<Availability />} />
        <Route path="/ImageButtonDemo" element={<ImageButtonDemo />} />
        <Route path="/manage-patients" element={<ManagePatients patients={patients} setPatients={setPatients} />} />  // Step 2: Pass the state and setter to ManagePatients
        {/* ... your existing routes */}
      </Routes>
    </Router>
  );
}

export default App;