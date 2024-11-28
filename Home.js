import React, { useState } from 'react';
import './Home.css';
import Main from './Main'; // Ensure this path is correct

const Home = () => {
  const [showMain, setShowMain] = useState(false); // State to control Main visibility
  const [activeSection, setActiveSection] = useState(''); // State to control active section

  const handleDashboardClick = () => {
    setShowMain(true); // Show the Main component when clicked
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Medifusion</h1>
        <button onClick={handleDashboardClick}>Dashboard</button> {/* Button to open Main */}
        <nav>
          <ul className="nav-links">
            <li onClick={() => handleSectionClick('main')}>Main</li>
            <li onClick={() => handleSectionClick('contact')}>Contact</li>
            <li onClick={() => handleSectionClick('services')}>Services</li>
            <li onClick={() => handleSectionClick('about')}>About</li>
            <li onClick={() => handleSectionClick('support')}>Support</li>
          </ul>
        </nav>
      </header>

      {showMain && <Main />} {/* Conditionally render Main */}

      {activeSection === 'main' && (
        <div className="main-section">
          <h1 className="main-title">MEDI FUSION</h1>
          <p>Welcome to the MEDI FUSION main page!</p>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="section">
          <h2 className="contact-title">Contact Us</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit"> Submit </button>
          </form>
        </div>
      )}

      {activeSection === 'services' && (
        <div className="section">
          <h2>Our Services</h2>
          <p>Details about services offered.</p>
        </div>
      )}

      {activeSection === 'about' && (
        <div className="section">
          <h2>About Us</h2>
          <p>Information about the company.</p>
        </div>
      )}

      {activeSection === 'support' && (
        <div className="section">
          <h2>Support</h2>
          <p>Information on how to get support.</p>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2023 MEDI FUSION. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;