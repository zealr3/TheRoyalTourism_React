import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';  // Correct the import path
import SignUp from './pages/SignUp';  // Correct the import path
import Navbar from './components/navbar';  // Correct the import path
import Footer from './components/Footer';  // Correct the import path
import HomePage from './pages/HomePage';  // Correct import path

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
