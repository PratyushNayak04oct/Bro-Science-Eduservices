import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Doubts from './pages/Doubts';
import Library from './pages/Library';
import Marketplace from './pages/Marketplace';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css' ; 

function App() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <Router>
      <div className = "app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/doubts" element={<Doubts />} />
            <Route path="/library" element={<Library />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;