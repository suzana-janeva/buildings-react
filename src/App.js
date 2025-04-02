import React, { useState } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import './Register.css'; 

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);
    
    axios
      .post("http://127.0.0.1:8000/api/register", { name, email, password })
      .then((response) => {
        const { user, socialite, message } = response.data;
        alert(message); // You can also display this message in your UI
        console.log("User Data:", user);
        console.log("Socialite Data:", socialite);
        // You can redirect or update UI after registration success
      })
      .catch((error) => {
        setError("Registration failed. Please try again.");
        console.error("Registration failed:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="register">
      <h1>Register</h1>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button onClick={handleRegister} disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </div>
  );
}

export default Register;