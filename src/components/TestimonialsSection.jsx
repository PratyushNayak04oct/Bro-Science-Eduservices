import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  
  const testimonials = [
    {
      text: "The teaching methodology at Bro Science Eduservices is exceptional. The faculty helped me build a strong conceptual foundation which was crucial for my JEE success.",
      name: "Aditya Kumar",
      achievement: "AIR 45 in JEE Advanced",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      text: "The personalized attention and doubt clearing sessions helped me understand complex topics easily. I'm grateful to the entire team for their support.",
      name: "Priya Singh",
      achievement: "NEET AIR 156",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      text: "The study material and mock tests provided were excellent. They helped me identify my weaknesses and improve systematically.",
      name: "Rahul Verma",
      achievement: "Selected in IISER Pune",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    }
  ];

  useGSAP(() => {
    gsap.from('.testimonial-slide', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse'
      }
    });
  }, { scope: sectionRef });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section ref={sectionRef} className = "testimonials-section section">
      <div className = "container">
        <h2 className = "section-title">Student Testimonials</h2>
        
        <div className = "testimonial-container">
          <button className = "testimonial-nav prev-button" onClick={prevSlide}>&lt;</button>
          
          <div className = "testimonial-slide">
            <FaQuoteLeft className = "quote-icon" />
            <p className = "testimonial-text">{testimonials[currentSlide].text}</p>
            
            <div className = "testimonial-author">
              <div className = "author-image">
                <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
              </div>
              <div className = "author-info">
                <div className = "author-name">{testimonials[currentSlide].name}</div>
                <div className = "author-achievement">{testimonials[currentSlide].achievement}</div>
              </div>
            </div>
          </div>
          
          <button className = "testimonial-nav next-button" onClick={nextSlide}>&gt;</button>
          
          <div className = "testimonial-controls">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`control-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;