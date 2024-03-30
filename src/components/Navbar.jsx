import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = ({ onStyleChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('default');

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
    onStyleChange(style);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Markdown Previewer</div>
      <ul className="navbar-nav">
        <li className={`nav-item ${selectedStyle === 'default' ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => handleStyleChange('default')}>Default</button>
        </li>
        <li className={`nav-item ${selectedStyle === 'dark' ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => handleStyleChange('dark')}>Dark</button>
        </li>
        <li className={`nav-item ${selectedStyle === 'light' ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => handleStyleChange('light')}>Light</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
