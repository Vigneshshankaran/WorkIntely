import React from 'react';
import Hero from '../components/Hero';
import WiFamilyBanner from '../components/WiFamilyBanner';
import IndustrySolutions from '../components/IndustrySolutions';
import PlatformPhilosophy from '../components/PlatformPhilosophy';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WiFamilyBanner />
      <IndustrySolutions />
      <PlatformPhilosophy />
    </>
  );
}
