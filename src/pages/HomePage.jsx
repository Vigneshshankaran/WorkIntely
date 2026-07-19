import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import PlatformBento from '../components/PlatformBento';
import WhyWiPlatform from '../components/WhyWiPlatform';
import PlatformPhilosophy from '../components/PlatformPhilosophy';
import WhyChooseWi from '../components/WhyChooseWi';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <PlatformBento />
      <WhyWiPlatform />
      <PlatformPhilosophy />
      <WhyChooseWi />
    </>
  );
}
