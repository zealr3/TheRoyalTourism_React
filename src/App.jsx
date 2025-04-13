import { useState, useEffect } from 'react';
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
import AnyFestivalPage from './pages/Anyfestival';
import Packages from './pages/package';
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
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Destinations/Domesticdestinations" element={<DomesticDestinations />} />
        <Route path="/Destinations/InternationalDestination" element={<InternationalDestination />} />
        <Route path="/destination/:destinationId/packages" element={<Packages />} /> {/* Updated parameter name */}
        <Route path="/Anyfestival" element={<AnyFestivalPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;