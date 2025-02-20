import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css"; // Ensure correct path

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful!");
        setEmail("");
        setPassword("");
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("An error occurred during login.");
      console.error("Login Error:", err);
    }
  };

  return (
    <div id="signin-page">
      <div className="signin-container">
        <div className="signin-form">
          <h2>Sign In</h2>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
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
            <button type="submit">Sign In</button>
          </form>
          <p>
            Dont have an account?{" "}
            <Link to="/signup" className="signin-toggle">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
