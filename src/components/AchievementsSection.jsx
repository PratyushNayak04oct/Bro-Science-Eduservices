import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import { FaTrophy, FaCheckCircle, FaChartLine, FaUsers } from 'react-icons/fa';

const AchievementsSection = () => {
  const sectionRef = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.achievement-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse'
      }
    });
    
    gsap.from('.cta-container', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.cta-container',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
    
  }, { scope: sectionRef });
  
  const achievements = [
    {
      id: 1,
      title: '100+ IIT Selections',
      description: 'Our students have secured admissions in top IITs including Bombay, Delhi, and Kharagpur.',
      icon: <FaTrophy />
    },
    {
      id: 2,
      title: '200+ NEET Qualifiers',
      description: 'Successful NEET candidates with many securing seats in prestigious medical colleges.',
      icon: <FaCheckCircle />
    },
    {
      id: 3,
      title: '95% Success Rate',
      description: 'Consistent success in board examinations with students scoring 90% and above.',
      icon: <FaChartLine />
    },
    {
      id: 4,
      title: '5000+ Alumni Network',
      description: 'A strong network of successful alumni pursuing careers across the globe.',
      icon: <FaUsers />
    }
  ];

  return (
    <section ref={sectionRef} className = "achievements-section section">
      <div className = "container">
        <h2 className = "section-title">Our Achievements</h2>
        
        <div className = "achievements-container">
          {achievements.map((achievement) => (
            <div key={achievement.id} className = "achievement-card">
              <div className = "achievement-icon">
                {achievement.icon}
              </div>
              <h3 className = "achievement-title">{achievement.title}</h3>
              <p className = "achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className = "cta-container">
          <h3 className = "cta-title">Ready to Join the League of Achievers?</h3>
          <p className = "cta-text">
            At Bro Science Eduservices, we're committed to turning ambitions into achievements. 
            Our proven methodologies and expert guidance will help you reach your educational goals.
          </p>
          <Link to="/contact">
            <Button type="secondary">Get Started Today</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;