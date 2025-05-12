import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './Button';

const HeroSection = () => {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderImages = [
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5905480/pexels-photo-5905480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  // AutoSlide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Initial animation for hero content
    gsap.from('.hero-content h1', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5
    });
    
    gsap.from('.hero-content p', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.8
    });
    
    gsap.from('.hero-buttons', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1.1
    });
  }, []);

  return (
    <section ref={heroRef} className = "hero-section">
      <div className = "slider-container">
        {sliderImages.map((img, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className = "slider-overlay"></div>
      </div>
      
      <div className = "hero-content">
        <h1>
          Your <span>ATTITUDE</span> decides<br /> your <span>ALTITUDE</span>
        </h1>
        <p>Join Bro Science Eduservices and reach your full potential</p>
        <div className = "hero-buttons">
          <Link to="/courses">
            <Button type="primary">Explore Courses</Button>
          </Link>
          <Link to="/contact">
            <Button type="secondary">Contact Us</Button>
          </Link>
        </div>
      </div>
      
      <div className = "slider-controls">
        <button onClick={prevSlide} className = "slider-arrow prev">&lt;</button>
        <div className = "slider-dots">
          {sliderImages.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button onClick={nextSlide} className = "slider-arrow next">&gt;</button>
      </div>
    </section>
  );
};

export default HeroSection;