import React from 'react';
import Hero from '../components/Hero';
import WiFamilyBanner from '../components/WiFamilyBanner';
import CoreModulesCta from '../components/CoreModulesCta';
import PlatformPhilosophy from '../components/PlatformPhilosophy';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WiFamilyBanner />
      <CoreModulesCta />
      <PlatformPhilosophy />
    </>
  );
}
