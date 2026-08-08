import React from 'react';
import PlatformHero from '../components/PlatformHero';
import PlatformExplorer from '../components/PlatformExplorer';
import './PlatformPage.css';

export default function PlatformPage() {
  return (
    <div className="platform-page">

      {/* Intro: copy left, product visual right */}
      <PlatformHero />

      {/* Tabbed tour of every module */}
      <PlatformExplorer />

    </div>
  );
}
