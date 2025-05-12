import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FacultySection = () => {
  const sectionRef = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.faculty-card', {
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
    
    gsap.from('.faculty-button', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.faculty-button',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
    
  }, { scope: sectionRef });
  
  const faculty = [
    {
      id: 1,
      name: 'Dr. Rahul Sharma',
      position: 'Physics Expert',
      qualification: 'PhD in Theoretical Physics, IIT Delhi',
      experience: '15+ years teaching experience',
      image: 'https://images.pexels.com/photos/8197509/pexels-photo-8197509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Prof. Alisha Patel',
      position: 'Chemistry Specialist',
      qualification: 'MSc. in Chemistry, ICT Mumbai',
      experience: '12+ years of academic excellence',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Mr. Vikram Desai',
      position: 'Mathematics Genius',
      qualification: 'M.Tech, IIT Kharagpur',
      experience: '10+ years teaching mathematics',
      image: 'https://images.pexels.com/photos/8363742/pexels-photo-8363742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Dr. Priya Gupta',
      position: 'Biology Expert',
      qualification: 'PhD in Molecular Biology, AIIMS',
      experience: '8+ years in medical entrances',
      image: 'https://images.pexels.com/photos/5905921/pexels-photo-5905921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section ref={sectionRef} className = "faculty-section section">
      <div className = "container">
        <h2 className = "section-title">Our Expert Faculty</h2>
        
        <div className = "faculty-container">
          {faculty.map((member) => (
            <div key={member.id} className = "faculty-card">
              <div className = "faculty-image">
                <img src={member.image} alt={member.name} />
                <div className = "faculty-social">
                  <a href="#" className = "social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="#" className = "social-icon">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
              <div className = "faculty-content">
                <h3 className = "faculty-name">{member.name}</h3>
                <div className = "faculty-position">{member.position}</div>
                <div className = "faculty-qualification">{member.qualification}</div>
                <div className = "faculty-experience">{member.experience}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className = "faculty-button">
          <Link to="/courses">
            <Button type="primary">Meet All Faculty</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;