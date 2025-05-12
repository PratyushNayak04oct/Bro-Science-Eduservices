import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { FaUser, FaCalendar, FaArrowRight } from 'react-icons/fa';

const BlogSection = () => {
  const sectionRef = useRef(null);
  
  const blogs = [
    {
      id: 1,
      title: "My Journey to IIT Bombay",
      excerpt: "How consistent preparation and the right guidance helped me secure a seat in Computer Science at IIT Bombay.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      tag: "JEE Success",
      author: "Arjun Mehta",
      date: "June 12, 2024"
    },
    {
      id: 2,
      title: "NEET Preparation: My Success Strategy",
      excerpt: "The study plan and techniques I followed to score 695 in NEET and secure admission in AIIMS, New Delhi.",
      image: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg",
      tag: "NEET Success",
      author: "Riya Desai",
      date: "May 28, 2024"
    },
    {
      id: 3,
      title: "How I Balanced Board Exams and JEE",
      excerpt: "Managing time effectively to excel in both board examinations and competitive exams like JEE Main and Advanced.",
      image: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg",
      tag: "Exam Strategy",
      author: "Karan Khanna",
      date: "April 15, 2024"
    },
    {
      id: 4,
      title: "My Experience at NISER Bhubaneswar",
      excerpt: "From preparation to admission: How I secured a spot at the National Institute of Science Education and Research.",
      image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg",
      tag: "NISER Journey",
      author: "Ananya Patel",
      date: "March 3, 2024"
    }
  ];

  useGSAP(() => {
    gsap.from('.blog-card', {
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className = "blog-section section">
      <div className = "container">
        <h2 className = "section-title">Success Stories</h2>
        
        <div className = "blog-container">
          {blogs.map((blog) => (
            <div key={blog.id} className = "blog-card">
              <div className = "blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className = "blog-tag">{blog.tag}</span>
              </div>
              <div className = "blog-content">
                <h3 className = "blog-title">{blog.title}</h3>
                <p className = "blog-excerpt">{blog.excerpt}</p>
                <div className = "blog-meta">
                  <div className = "blog-author">
                    <FaUser />
                    {blog.author}
                  </div>
                  <div className = "blog-date">
                    <FaCalendar />
                    {blog.date}
                  </div>
                </div>
                <Link to={`/blogs/${blog.id}`} className = "read-more">
                  Read Full Story <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;