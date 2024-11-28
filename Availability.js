import React from 'react';

const Availability = () => {
  const availability = [
    { doctor: 'Dr. John Smith', days: 'Monday to Friday', time: '9 AM - 5 PM' },
    { doctor: 'Dr. Jane Doe', days: 'Tuesday to Saturday', time: '10 AM - 4 PM' },
    { doctor: 'Dr. Emily Johnson', days: 'Wednesday to Sunday', time: '11 AM - 6 PM' },
  ];

  return (
    <div>
      <h2>Availability of Doctors</h2>
      <ul>
        {availability.map((entry, index) => (
          <li key={index}>
            <h3>{entry.doctor}</h3>
            <p>Available: {entry.days}</p>
            <p>Time: {entry.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Availability;
  