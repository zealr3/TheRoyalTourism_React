import { useState } from "react";
import PropTypes from "prop-types";  
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();




  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
   if (!name || !email || !password ) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname: name, email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const userData = { name: name, email: email };
        localStorage.setItem("user", JSON.stringify(userData));
        
        setUser(userData);
        Swal.fire({
          title: "Notification",
          text: "Registration successful!",
          icon: "success",
          showConfirmButton: true
        }).then(() => {
          navigate("/signin");
        });
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
    <div 
      className="py-5" 
      style={{ 
        backgroundImage: "url('/assets/Images/login_banner.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
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
              minHeight: "100%"
            }}
          >
            <div className="heading-section text-center">
              <h2 
                style={{ 
                  fontSize: "2.1rem",
                  fontFamily: "'Freestyle Script'",
                  fontWeight: 500 
                }}
              >
                Your Adventure Awaits
              </h2>
            </div>
            <h2 className="text-center main-text pb-3" style={{fontSize: "2.7rem"}}>Join Us Today!</h2>
            {error && <div className="error-message text-danger text-center">{error}</div>}
            <form className="pt-3" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-6 col-md-6 col-lg-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-xl-6 col-md-6 col-lg-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@gmail.com"
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
                  <div className="btn-box text-center">
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
                        fontFamily: "Arial"
                      }}
                    >
                      {loading ? "Loading..." : "Register"} <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </div>
                </div>
                <div className="col-xl-12 mt-4">
                  <div className="justify-content-center d-flex gap-2">
                    Already have an account?{" "}
                    <Link to="/signin" className="fw-bold main-text">
                      Login
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

SignUp.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SignUp;