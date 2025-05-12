import { FaGraduationCap, FaFlask, FaMicroscope, FaCalculator, FaBook, FaUniversity } from 'react-icons/fa';

const QuickHighlights = () => {
  const courses = [
    { icon: <FaGraduationCap />, text: 'IIT JEE Preparation' },
    { icon: <FaMicroscope />, text: 'NEET Coaching' },
    { icon: <FaCalculator />, text: 'Class 11-12 Science' },
    { icon: <FaBook />, text: 'Foundation Courses' },
    { icon: <FaUniversity />, text: 'CUET Preparation' },
    { icon: <FaFlask />, text: 'IISER & NISER Coaching' },
  ];

  // Duplicate courses for seamless scrolling
  const allCourses = [...courses, ...courses];

  return (
    <div className = "quick-highlights">
      <div className = "marquee-container">
        {allCourses.map((course, index) => (
          <div key={index} className = "marquee-item">
            <span className = "marquee-icon">{course.icon}</span>
            <span className = "marquee-text">{course.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickHighlights;