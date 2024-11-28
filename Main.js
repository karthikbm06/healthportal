import React, { useState } from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom'; 
import { Button, styled, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './Home';

// Styled Animated Button with Zoom In/Out Effect
const AnimatedButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: theme.palette.secondary.main,
  },
  '& span': {
    position: 'relative',
    zIndex: 1,
  },
}));

const Main = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleMenuItemClick = (path) => {
    handleMenuClose();
    navigate(path);
  };

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="main-section">
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
        style={{ position: 'absolute', top: 10, right: 10 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuItemClick('/admin-login')}>Admin Login</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/services')}>Services</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/contact')}>Contact</MenuItem>
      </Menu>
  
      <h2 className="main-title">Welcome to Our Healthcare Portal</h2>
      <div className="button-container">
        <AnimatedButton 
          variant="contained" 
          onClick={() => handleRedirect('/Doctorinfo')}
          style={{ margin: '10px' }}
        >
          Doctor Information
        </AnimatedButton>
        <AnimatedButton 
          variant="contained" 
          onClick={() => handleRedirect('/Patientinfo')}
          style={{ margin: '10px' }}
        >
          Patient Information
        </AnimatedButton>
        <AnimatedButton 
          variant="contained" 
          onClick={() => handleRedirect('/Availability')}
          style={{ margin: '10px' }}
        >
          Availability of Doctors
        </AnimatedButton>
        
      </div>
      <footer className="footer">
        <p>&copy; 2023 MEDI FUSION. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Main;