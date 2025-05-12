import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import QuickHighlights from '../components/QuickHighlights';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import FacultySection from '../components/FacultySection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import VideoSection from '../components/VideoSection';
import SocialSection from '../components/SocialSection';
import AchievementsSection from '../components/AchievementsSection';
import '../index.css' ; 

const Home = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Bro Science Eduservices - Empowering Young Minds';
  }, []);

  return (
    <>
      <HeroSection />
      <QuickHighlights />
      <AboutSection />
      <CoursesSection />
      <FacultySection />
      <TestimonialsSection />
      <BlogSection />
      <VideoSection />
      <SocialSection />
      <AchievementsSection />
    </>
  );
};

export default Home;