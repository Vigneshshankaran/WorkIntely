import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import PlatformHero from '../components/PlatformHero';
import IndustrySolutions from '../components/IndustrySolutions';
import PlatformPhilosophy from '../components/PlatformPhilosophy';

export default function HomePage() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      {/* h2 here — the page's h1 belongs to the hero above */}
      <PlatformHero as="h2" />
      <IndustrySolutions />
      <PlatformPhilosophy />
    </>
  );
}
