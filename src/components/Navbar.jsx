import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className = "navbar-container">
        <Link to="/" className = "navbar-logo">
          <span className = "logo-part1">Bro Science</span>
          <span className = "logo-part2">Eduservices</span>
        </Link>
        
        <div className = "menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className = "nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li className = "nav-item">
            <Link to="/courses" className={location.pathname === '/courses' ? 'nav-link active' : 'nav-link'}>
              Courses
            </Link>
          </li>
          <li className = "nav-item">
            <Link to="/doubts" className={location.pathname === '/doubts' ? 'nav-link active' : 'nav-link'}>
              Doubts
            </Link>
          </li>
          <li className = "nav-item">
            <Link to="/library" className={location.pathname === '/library' ? 'nav-link active' : 'nav-link'}>
              Library
            </Link>
          </li>
          <li className = "nav-item">
            <Link to="/marketplace" className={location.pathname === '/marketplace' ? 'nav-link active' : 'nav-link'}>
              Marketplace
            </Link>
          </li>
          <li className = "nav-item">
            <Link to="/blogs" className={location.pathname === '/blogs' ? 'nav-link active' : 'nav-link'}>
              Blogs
            </Link>
          </li>
          <li className = "nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;