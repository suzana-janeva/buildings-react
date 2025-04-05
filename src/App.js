import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar component
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';

import axios from "axios";
import logo from './logo.svg';
import './App.css';
import './Register.css'; 

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here to appear on all pages */}
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;