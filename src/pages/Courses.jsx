import { useEffect } from 'react';

const Courses = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Our Courses - Bro Science Eduservices';
  }, []);

  return (
    <div className = "courses-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className = "container">
        <h1 className = "section-title">Our Courses</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px' }}>
          Explore our comprehensive courses designed to help students excel in academics and competitive exams.
        </p>
        
        <div style={{ textAlign: 'center' }}>
          <p>Full courses page content will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;