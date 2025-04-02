import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import DomesticDestinations from './pages/Domesticdestination';
import InternationalDestination from './pages/Internationaldestination';
import Account from './pages/Account'; // ✅ Create this new page
import AnyFestivalPage from './pages/Anyfestival';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      console.log("Loading saved user:", parsedUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />  {/* Pass both user and setUser */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} /> {/* Pass setUser prop */}
        <Route path="/signup" element={<SignUp setUser={setUser} />} /> {/* Pass setUser prop */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Destinations/Domesticdestinations" element={<DomesticDestinations />} />
        <Route path="/Destinations/InternationalDestination" element={<InternationalDestination />} />
        <Route path="/account" element={<Account user={user} setUser={setUser} />} /> {/* New Account Route */}
        <Route path="/Anyfestival" element={<AnyFestivalPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
