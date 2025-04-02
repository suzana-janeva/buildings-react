import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data using the stored token
  const fetchUser = () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      setError("No authentication token found. Please log in.");
      setLoading(false);
      return;
    }

    axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setError("Error fetching user data.");
        console.error("Error fetching user:", err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="UserProfile">
      <h1>User Profile</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Display other user info as needed */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default UserProfile;