import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close the mobile menu on navigation or Escape */
  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`navbar-wrapper ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="WorkIntely Home">
          <Logo height={32} />
        </Link>

        {/* Center Navigation Links (desktop) */}
        <nav className="nav-menu" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Platform</NavLink>
          <Link to="/#modules" className="nav-link">Modules</Link>
          <Link to="/#why-wi" className="nav-link">Why WorkIntely</Link>
          <NavLink to="/resources" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Resources</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
        </nav>

        {/* Right CTA Action */}
        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary btn-talk">
            <MessageSquare size={16} />
            <span>Talk to Us</span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu sheet */}
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Primary mobile">
          <NavLink to="/" end className="mobile-link" onClick={() => setOpen(false)}>Platform</NavLink>
          <Link to="/#modules" className="mobile-link" onClick={() => setOpen(false)}>Modules</Link>
          <Link to="/#why-wi" className="mobile-link" onClick={() => setOpen(false)}>Why WorkIntely</Link>
          <NavLink to="/resources" className="mobile-link" onClick={() => setOpen(false)}>Resources</NavLink>
          <NavLink to="/about" className="mobile-link" onClick={() => setOpen(false)}>About Us</NavLink>
          <Link to="/contact" className="btn btn-primary mobile-cta" onClick={() => setOpen(false)}>
            <MessageSquare size={16} />
            <span>Talk to Us</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
