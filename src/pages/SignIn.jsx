import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn = ({ setUser  }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!email || !password) {
      setError("Both fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const userData = { name: data.name, email: email };
        localStorage.setItem("user", JSON.stringify(userData));
         
        setUser (userData); 
        setSuccess("Login successful!");
        setEmail("");
        setPassword("");
        navigate("/"); 
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("An error occurred during login.");
      console.error("Login Error:", err);
    } finally {
      setLoading(false); // Ensure loading state is reset
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
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signin-toggle">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  setUser:-  PropTypes.func.isRequired,
};

export default SignIn;