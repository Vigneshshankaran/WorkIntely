import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import './Header.css';

/* Nav menus. */
const productLinks = [
  { label: 'WiTalents', to: '/WiTalents' },
  { label: 'WiPeople', to: '/WiPeople' }
];

const resourceLinks = [
  { label: 'Connect Wi', to: '/contact' }
];

/* Click-only dropdown: opening on hover would make the click that follows
   toggle it straight back shut, and click keeps touch and keyboard identical. */
function NavDropdown({ id, label, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onPointer = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [open]);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        type="button"
        className={`nav-link nav-dropdown-trigger ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`${id}-menu`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{label}</span>
        <ChevronDown size={15} aria-hidden="true" />
      </button>

      {open && (
        <div className="nav-dropdown-panel" id={`${id}-menu`} role="menu">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              role="menuitem"
              className="nav-dropdown-item"
              onClick={() => { setOpen(false); onNavigate?.(); }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

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
        <Link to="/" className="brand-logo" aria-label="WorkIntel Home">
          <Logo height={28} />
        </Link>

        {/* Center Navigation Links (desktop) */}
        <nav className="nav-menu" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Platform</NavLink>
          <NavDropdown id="product" label="Product" items={productLinks} />
          <NavLink to="/pricing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Pricing</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
          <NavDropdown id="resources" label="Resources" items={resourceLinks} />
        </nav>

        {/* Right actions: the two sign-in paths */}
        <div className="nav-actions">
          <Link to="/business-login" className="btn btn-nav-business">
            <span>Business Login</span>
          </Link>
          <Link to="/candidate-login" className="btn btn-nav-candidate">
            <span>Candidate Login</span>
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

      {/* Mobile menu sheet — the dropdown groups flatten into labelled lists */}
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Primary mobile">
          <NavLink to="/" end className="mobile-link" onClick={() => setOpen(false)}>Platform</NavLink>

          <span className="mobile-group-label">Product</span>
          {productLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className="mobile-link mobile-sublink" onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}

          <NavLink to="/pricing" className="mobile-link" onClick={() => setOpen(false)}>Pricing</NavLink>
          <NavLink to="/about" className="mobile-link" onClick={() => setOpen(false)}>About Us</NavLink>

          <span className="mobile-group-label">Resources</span>
          {resourceLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className="mobile-link mobile-sublink" onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}

          <Link to="/business-login" className="btn btn-nav-business mobile-cta" onClick={() => setOpen(false)}>
            <span>Business Login</span>
          </Link>
          <Link to="/candidate-login" className="btn btn-nav-candidate mobile-cta" onClick={() => setOpen(false)}>
            <span>Candidate Login</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
