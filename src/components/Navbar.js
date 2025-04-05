import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for navigation

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#282c34', color: 'white' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link></li>
        <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li>
        <li><Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;