import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    teamSize: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.workEmail && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section className="contact-page section-1440">
      <div className="container">
        <div className="contact-layout">
          
          {/* Left Column: Headline, Subtitle, Direct Reach Info */}
          <div className="contact-left-col">
            <h1 className="contact-title">Talk to WI</h1>
            
            <p className="contact-subtitle">
              Tell us about your team and we'll show you how WorkIntel fits your talent management needs.
            </p>

            <div className="direct-reach-box">
              <h4 className="reach-header">Prefer to reach us directly?</h4>
              
              <div className="reach-email-row">
                <Mail size={16} className="reach-icon" />
                <a href="mailto:connect@workintel.com" className="email-link">
                  connect@workintel.com
                </a>
              </div>

              <p className="reach-note">
                Our team typically responds within one business day. For enterprise inquiries, 
                mention your team size and current systems in your message.
              </p>

              {/* Social Icons Row */}
              <div className="contact-social-row">
                {/* X */}
                <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="contact-social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="contact-social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="contact-social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="contact-social-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="contact-right-card">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={48} className="success-check-icon" />
                <h3>Thank You, {formData.fullName}!</h3>
                <p>We've received your request. A WorkIntel advisor will be in touch with you shortly at {formData.workEmail}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="talk-form">
                
                {/* Field Grid: 2 Columns for inputs */}
                <div className="form-fields-grid">
                  <div className="form-field">
                    <label htmlFor="cf-name">Full Name*</label>
                    <input
                      id="cf-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-email">Work Email*</label>
                    <input
                      id="cf-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-company">Company*</label>
                    <input
                      id="cf-company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-teamsize">Team Size*</label>
                    <input
                      id="cf-teamsize"
                      type="text"
                      required
                      placeholder="e.g. 200–500"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div className="form-field full-width">
                  <label htmlFor="cf-message">What are you looking to solve?*</label>
                  <textarea
                    id="cf-message"
                    required
                    rows="4"
                    placeholder="Tell us about your talent management needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="talk-submit-btn">
                  <Send size={16} />
                  <span>Submit</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
