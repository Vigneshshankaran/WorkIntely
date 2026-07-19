import React from 'react';

export default function Logo({ dark = false, height = 32, showText = true }) {
  return (
    <div className="brand-logo-wrap" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg 
        width={height * 1.1} 
        height={height} 
        viewBox="0 0 100 90" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wiLogoGrad" x1="0" y1="90" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        {/* Dot above the center 'i' stroke */}
        <circle cx="50" cy="18" r="8" fill="url(#wiLogoGrad)" />

        {/* 'W' Ribbon loop with upward growth arrow */}
        <path
          d="M18 32 C14 32 10 38 12 48 L24 80 C26 85 32 85 34 80 L48 42 C49 39 51 39 52 42 L66 80 C68 85 74 85 76 80 L88 44"
          stroke="url(#wiLogoGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow tip on right branch */}
        <path
          d="M78 30 L94 40 L92 20 Z"
          fill="url(#wiLogoGrad)"
        />
      </svg>

      {showText && (
        <span style={{ 
          fontFamily: "'Plus Jakarta Sans', sans-serif", 
          fontSize: `${height * 0.65}px`, 
          fontWeight: 800, 
          letterSpacing: '-0.02em',
          lineHeight: 1,
          display: 'inline-flex',
          alignItems: 'center'
        }}>
          <span style={{ color: dark ? '#ffffff' : '#0f172a' }}>Work</span>
          <span style={{ color: '#8b5cf6' }}>Intely</span>
        </span>
      )}
    </div>
  );
}
