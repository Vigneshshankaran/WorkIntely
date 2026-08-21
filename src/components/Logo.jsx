import React from 'react';
import './Logo.css';

export default function Logo({ dark = false, height = 32, showText = true }) {
  return (
    <div className="brand-logo-wrap">
      <img
        className="brand-logo-img"
        src="/wi Logo (1).png"
        alt="WorkIntel Logo"
        style={{ height: `${height}px` }}
      />

      {showText && (
        <span className="brand-logo-text" style={{ fontSize: `${height * 0.65}px` }}>
          <span className={`brand-logo-text-work ${dark ? 'is-dark' : ''}`}>Work</span>
          <span className="brand-logo-text-intel">Intel</span>
        </span>
      )}
    </div>
  );
}
