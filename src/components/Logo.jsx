import React from 'react';

export default function Logo({ dark = false, height = 32, showText = true }) {
  return (
    <div className="brand-logo-wrap" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src="/wi_logo_transparent.png" 
        alt="WorkIntel Logo" 
        style={{ 
          height: `${height}px`, 
          width: 'auto', 
          display: 'block',
          objectFit: 'contain'
        }} 
      />

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
          <span style={{ color: 'var(--ink)' }}>Work</span>
          <span style={{ color: '#8b5cf6' }}>Intel</span>
        </span>
      )}
    </div>
  );
}
