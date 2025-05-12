import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Contact Us - Bro Science Eduservices';
  }, []);

  return (
    <div className = "contact-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className = "container">
        <h1 className = "section-title">Contact Us</h1>
        <p style={{ textAlign: 'center', marginBottom: '40px' }}>
          Have questions? Reach out to us and we'll be happy to help.
        </p>
        
        <div style={{ textAlign: 'center' }}>
          <p>Full contact page content will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;