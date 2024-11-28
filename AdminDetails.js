import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminDetails.css';

const AdminDetails = ({ patients, setPatients }) => { // Accept patients and setPatients as props
  const navigate = useNavigate(); // Initialize useNavigate

  const navigateToAddPatient = () => {
    navigate('/add-patient'); // Redirect to the AddPatient component
  };

  const navigateToViewServices = () => {
    navigate('/services'); // Redirect to the Services component
  };

  const navigateToManagePatients = () => {
    navigate('/manage-patients'); // Redirect to the ManagePatients component
  };

  const navigateToViewAppointments = () => {
    navigate('/view-appointments'); // Redirect to the ViewAppointments component
  };

  const navigateToManageStaff = () => {
    navigate('/manage-staff'); // Redirect to the ManageStaff component
  };

  const navigateToViewReports = () => {
    navigate('/view-reports'); // Redirect to the ViewReports component
  };

  return (
    <Box className="admin-details-fullscreen">
      <Box className="admin-details-box">
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the Health Portal
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" paragraph>
          Here you can manage patient records, view services, and handle other administrative tasks.
        </Typography>
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" onClick={navigateToAddPatient} fullWidth>
              Add New Patient
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="secondary" onClick={navigateToViewServices} fullWidth>
              View Services
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="success" onClick={navigateToManagePatients} fullWidth>
              Manage Patients
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="info" onClick={navigateToViewAppointments} fullWidth>
              View Appointments
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="warning" onClick={navigateToManageStaff} fullWidth>
              Manage Staff
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="error" onClick={navigateToViewReports} fullWidth>
              View Reports
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDetails;