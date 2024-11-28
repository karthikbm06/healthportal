import React from 'react';
import './Main.css'; // Import the CSS

const PatientInfo = ({ patients }) => { // Accept patients as a prop
  return (
    <div className="info-container">
      <h2>Patient Information</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            <h3>{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Condition: {patient.condition}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientInfo;