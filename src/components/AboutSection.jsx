import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import { FaBookOpen, FaUserGraduate, FaTrophy, FaClock } from 'react-icons/fa';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.about-text', {
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

    gsap.from('.stats-card', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 80%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from('.about-button', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.about-button',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
    
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className = "about-section section">
      <div className = "container">
        <h2 className = "section-title">About Us</h2>
        
        <div className = "about-content">
          <div className = "about-text">
            <p>
              Bro Science Eduservices is a premier educational institution dedicated
              to nurturing young minds and preparing them for academic excellence
              and competitive success.
            </p>
            <p>
              We provide comprehensive education for classes 7-12 following
              various boards, along with specialized coaching for competitive exams
              like IIT JEE, NEET, CUET, OUAT, IISER, and NISER.
            </p>
            <p>
              Our unique teaching methodology, expert faculty, and personalized
              attention ensure that every student reaches their full potential. We
              believe that the right attitude and guidance can help students soar to
              new heights.
            </p>
            
            <div className = "about-button">
              <Link to="/courses">
                <Button type="primary">Discover Our Programs</Button>
              </Link>
            </div>
          </div>
          
          <div className = "stats-container ">

            <div className = "stats-card">
              <div className = "stats-icon">
                <FaBookOpen />
              </div>
              <div className = "stats-number">15+</div>
              <div className = "stats-label">Courses Offered</div>
            </div>
            
            <div className = "stats-card">
              <div className = "stats-icon">
                <FaUserGraduate />
              </div>
              <div className = "stats-number">1000+</div>
              <div className = "stats-label">Students Enrolled</div>
            </div>
            
            <div className = "stats-card">
              <div className = "stats-icon">
                <FaTrophy />
              </div>
              <div className = "stats-number">200+</div>
              <div className = "stats-label">Success Stories</div>
            </div>
            
            <div className = "stats-card">
              <div className = "stats-icon">
                <FaClock />
              </div>
              <div className = "stats-number">10+</div>
              <div className = "stats-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;