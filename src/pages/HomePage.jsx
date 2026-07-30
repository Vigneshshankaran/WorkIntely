import React from 'react';
import Hero from '../components/Hero';
import WiFamilyBanner from '../components/WiFamilyBanner';
import FeatureGrid from '../components/FeatureGrid';
import PlatformBento from '../components/PlatformBento';
import WhyWiPlatform from '../components/WhyWiPlatform';
import PlatformPhilosophy from '../components/PlatformPhilosophy';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WiFamilyBanner />
      <FeatureGrid />
      <PlatformBento />
      <WhyWiPlatform />
      <PlatformPhilosophy />
    </>
  );
}
