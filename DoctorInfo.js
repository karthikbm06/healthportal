import React from 'react';
import './Main.css'; // Import the CSS
import { Button, styled } from '@mui/material';

const DoctorInfo = () => {
  const doctors = [
    { name: 'Dr. John Smith', specialty: 'Cardiology', contact: '123-456-7890' },
    { name: 'Dr. Jane Doe', specialty: 'Pediatrics', contact: '987-654-3210' },
    { name: 'Dr. Emily Johnson', specialty: 'Orthopedics', contact: '456-789-0123' },
  ];

  return (
    <div className="info-container">
      <h2>Doctor Information</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>Contact: {doctor.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorInfo;