
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Send login request
    axios
      .post("http://127.0.0.1:8000/api/login", { email, password })
      .then((response) => {
        // Store the token in localStorage
        localStorage.setItem("token", response.data.access_token);

        // Redirect or perform other actions after successful login
        window.location.href = "http://127.0.0.1:8000/api/user/profile";  // Redirect to profile page after login
      })
      .catch((err) => {
        setError("Login failed. Please check your credentials.");
        console.error("Login error:", err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="form">
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
  
//     const handleSubmit = (e) => {
//       e.preventDefault(); // Prevent default form behavior
//       setLoading(true);
//       setError(null); // Clear any previous errors
  
//       axios
//         .post("http://127.0.0.1:8000/api/login", { email, password })
//         .then((response) => {
//           const { message } = response.data;
//           alert(message); // You can display this message in your UI
//           console.log("Login Success:", response.data);
//           // Handle redirect or update UI after successful login
//         })
//         .catch((error) => {
//           setError("Login failed. Please check your credentials and try again.");
//           console.error("Login failed:", error);
//         })
//         .finally(() => setLoading(false));
//     };
  
//     return (
//       <div className="form">
//         <h1>Login</h1>
  
//         {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error if any */}
  
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     );
//   }
  
//   export default Login;

