import React from 'react';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import PartnersLogos from '@/components/partners-logos';
import ProductsSection from '@/components/products-section';
import AboutSection from '@/components/about-section';
import Footer from '@/components/footer';

const HomePage = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <PartnersLogos speedSeconds={18} />
      <ProductsSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default HomePage;
