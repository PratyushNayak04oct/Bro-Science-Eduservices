import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import { FaFlask, FaMicroscope, FaCalculator, FaGraduationCap } from 'react-icons/fa';

const CoursesSection = () => {
  const sectionRef = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.course-card', {
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
    
    gsap.from('.view-all-button', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.view-all-button',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
    
  }, { scope: sectionRef });
  
  const courses = [
    {
      id: 1,
      title: 'IIT JEE Preparation',
      description: 'Comprehensive coaching for JEE Main & Advanced with conceptual understanding and problem-solving strategies.',
      icon: <FaFlask />,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'NEET Coaching',
      description: 'Expert guidance for NEET with focus on Biology, Chemistry and Physics through practical applications.',
      icon: <FaMicroscope />,
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Class 11-12 Science',
      description: 'Strong foundation in PCM/PCB subjects with board exam preparation and competitive exam orientation.',
      icon: <FaCalculator />,
      image: 'https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Foundation Courses (Class 7-10)',
      description: 'Building strong fundamentals in Science and Mathematics to prepare for future academic challenges.',
      icon: <FaGraduationCap />,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section ref={sectionRef} className = "courses-section section">
      <div className = "container">
        <h2 className = "section-title">Our Popular Courses</h2>
        
        <div className = "courses-container">
          {courses.map((course) => (
            <div key={course.id} className = "course-card">
              <div className = "course-image">
                <img src={course.image} alt={course.title} />
                <div className = "course-icon">
                  {course.icon}
                </div>
              </div>
              <div className = "course-content">
                <h3 className = "course-title">{course.title}</h3>
                <p className = "course-description">{course.description}</p>
                <Link to = "/courses" className = "learn-more">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className = "view-all-button">
          <Link to="/courses">
            <Button type="secondary">View All Courses</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;