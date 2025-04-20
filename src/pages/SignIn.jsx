import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = ({ setUser }) => {
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
      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const userData = { name: data.user.fullname, email: email };
        console.log("User data being saved:", userData);
        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);

        setSuccess("Login successful!");
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        setError(data.error || "Login failed.");
      }
    } catch (err) {
      setError("An error occurred during login.");
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="py-5"
      style={{
        backgroundImage: "url('/assets/Images/login_banner.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container w-2/5 py-5">
        <section className="register_section pt-5 pb-5">
          <div
            className="contact-form shadow-lg"
            style={{
              padding: "2rem",
              backgroundColor: "#F9F9F7",
              border: "1px solid #E9E9E9",
              borderRadius: "8px",
              minHeight: "100%",
            }}
          >
            <div className="heading-section text-center">
              <h2
                className="text-center"
                style={{
                  fontSize: "2.1rem",
                  fontFamily: "'Freestyle Script'",
                  fontWeight: 500,
                }}
              >
                Ready to Travel?
              </h2>
            </div>
            <h2 className="text-center main-text" style={{fontSize: "2.7rem"}}>Let&apos;s Get You Going!</h2>
            {error && <div className="error-message text-danger text-center">{error}</div>}
            {success && <div className="success-message text-success text-center">{success}</div>}
            <form className="pt-3" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-12 col-md-6 col-lg-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-xl-12 col-md-6 col-lg-6 mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="col-xl-12 mt-4">
                  <div className="btn-box text-center text-md-center">
                    <button
                      type="submit"
                      className="btn btn-reg col-xl-12 gap-1"
                      disabled={loading}
                      style={{
                        backgroundColor: "var(--primery)",
                        color: "var(--white)",
                        fontWeight: 500,
                        justifyContent: "center",
                        height: "50px",
                        fontSize: "24px",
                        fontFamily: "Arial",
                      }}
                    >
                      {loading ? "Loading..." : "Login"} <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
                <div className="col-xl-12 mt-4">
                  <div className="justify-content-center d-flex gap-2">
                    Don’t have an account?{" "}
                    <Link
                      to="/signup"
                      className="fw-bold"
                      style={{ color: "#8C387C" }}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SignIn;