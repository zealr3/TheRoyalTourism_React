import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/Account.css";

const Account = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  if (!user) {
    return (
      <div className="account-container">
        <h2>Please sign in to view your account.</h2>
        <button onClick={() => navigate("/signin")}>Sign In</button>
      </div>
    );
  }

  return (
    <div className="account-page">
      <div className="account-card">
        <h2>Welcome, {user.name}!</h2>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

Account.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Account;
