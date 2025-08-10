import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Sections/Hero';
import Services from '@/components/Sections/Services';
import CTA from '@/components/Sections/CTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
