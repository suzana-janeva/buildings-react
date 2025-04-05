import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setUser(response.data);  // Store the fetched user data
      })
      .catch((err) => {
        setError("Error fetching user data.");
        console.error("Error fetching user:", err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUser();  // Call the function to fetch user data
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
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default Profile;