import { useState } from "react";
import PropTypes from "prop-types";  
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = ({ setUser  }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname: name, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Use the name from the form input since we already have it
        // Or use data.user.fullname if you prefer getting it from the response
        const userData = { name: name, email: email };
        console.log("User data being saved:", userData); // Add this to debug
        localStorage.setItem("user", JSON.stringify(userData));
        
        setUser(userData);
        
        // Navigate to account or home page
        navigate("/");
      } else {
        setError(data.error || "Signup failed.");
      }
    } catch (err) {
      setError("An error occurred during signup.");
      console.error("Signup Error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div id="signup-page">
      <div className="signup-container">
        <div className="signup-form">
          <h2>Create an Account</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Create Password"
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
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="signup-toggle">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  setUser:  PropTypes.func.isRequired,
};

export default SignUp;