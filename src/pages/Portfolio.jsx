import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import CareerTimeline from '../components/portfolio/CareerTimeline';
import SkillsSection from '../components/portfolio/SkillsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import EducationSection from '../components/portfolio/EducationSection';
import ContactSection from '../components/portfolio/ContactSection';
import BeyondWorkSection from '../components/portfolio/BeyondWorkSection';
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="font-inter min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CareerTimeline />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <BeyondWorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
