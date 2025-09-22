import { AboutService } from '../components/AboutService';
import { ContactInfo } from '../components/ContactInfo';
import { FAQ } from '../components/Faq';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { OtherServices } from '../components/OtherServices';
import { Reviews } from '../components/Reviews';
import { Security } from '../components/Security';
import { FaqItemProps, IconProps } from 'types';
import React, { useState } from 'react';


// Type definition for Icon props
export const Icon: React.FC<IconProps> = ({ name, className }) => (
    <span className={`material-icons ${className}`}>{name}</span>
  );
  












// Main App Component
export const LandingPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutService />
        <Reviews />
        <Security />
        {/* You can re-include OtherServices, ContactInfo, and Footer if you uncomment them */}
        <OtherServices />
        <ContactInfo />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

 