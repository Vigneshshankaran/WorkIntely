import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="promora-footer">
      <div className="container promora-footer-container">
        
        {/* Top Section: Left Branding & Newsletter + Right Link Columns */}
        <div className="promora-top-grid">
          
          {/* Left Column: Brand, Tagline, Vision & Newsletter */}
          <div className="promora-brand-col">
            <Link to="/" className="promora-logo" aria-label="WorkIntel Home">
              <Logo dark={true} height={32} />
            </Link>

            <p className="promora-tagline">
              WorkIntel creates optimized talent pipelines by analyzing your enterprise workforce.
            </p>

            <h3 className="promora-vision">
              Together, we turn your vision into reality.
            </h3>

            {/* Newsletter Input Box */}
            {subscribed ? (
              <div className="promora-success-msg">
                ✓ Thank you for joining WorkIntel!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="promora-newsletter">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  aria-label="Email address"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="promora-input"
                />
                <button type="submit" className="promora-submit-btn">
                  Join
                </button>
              </form>
            )}
          </div>

          {/* Right Columns: Nav Links */}
          <div className="promora-nav-columns">
            <div className="promora-col">
              <h4 className="promora-col-title">Company</h4>
              <ul className="promora-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Careers</Link></li>
                <li><a href="#newsroom">Newsroom</a></li>
              </ul>
            </div>

            <div className="promora-col">
              <h4 className="promora-col-title">Platform</h4>
              <ul className="promora-links">
                <li><Link to="/">Overview</Link></li>
                <li><Link to="/modules">Modules</Link></li>
                <li><Link to="/#why-wi">Why WorkIntel</Link></li>
              </ul>
            </div>

            <div className="promora-col">
              <h4 className="promora-col-title">Modules</h4>
              <ul className="promora-links">
                <li><Link to="/modules">ATS</Link></li>
                <li><Link to="/modules">People</Link></li>
                <li><Link to="/modules">Grow</Link></li>
                <li><Link to="/modules">Perform</Link></li>
              </ul>
            </div>

            <div className="promora-col">
              <h4 className="promora-col-title">Resources</h4>
              <ul className="promora-links">
                <li><a href="#blog">Blog</a></li>
                <li><a href="#guides">Guides</a></li>
                <li><a href="#webinars">Webinars</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="promora-divider"></div>

        {/* Middle Bar: Sub-note & Social Icons */}
        <div className="promora-middle-bar">
          <div className="promora-subnote">
            Part of the WorkIntel platform family, including Staffing Services.
          </div>

          <div className="promora-socials">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="promora-social-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="promora-social-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X */}
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="promora-social-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="promora-social-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Giant Brand Typography Watermark Banner */}
        <div className="promora-watermark-wrap">
          <h1 className="promora-giant-text">WorkIntel</h1>
        </div>

        {/* Legal & Copyright */}
        <div className="promora-legal-row">
          <span>© 2026 WorkIntel. All rights reserved.</span>
          <div className="legal-links">
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
