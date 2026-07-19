import React from 'react';
import { Target, Users, Globe, Award, Sparkles, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <section className="about-page section-1440">
      <div className="container">
        
        {/* Top Section: Our Vision */}
        <div className="about-hero">
          <span className="eyebrow">OUR VISION</span>
          <h1 className="about-title">
            <span className="highlight-text">Operating Systems</span> for Talent Management Needs.
          </h1>
        </div>

        {/* Our Story Split Section */}
        <div className="about-story-grid">
          
          {/* Left Column: Soft Purple Container + UI Card */}
          <div className="about-visual-panel">
            <div className="story-mockup-card">
              <div className="story-card-badge">
                <Sparkles size={16} /> WorkIntely Platform Origin
              </div>
              <h3 className="story-card-title">Unified Talent Architecture</h3>
              <p className="story-card-sub">
                Designed to eliminate silos across ATS, HRIS, LMS, and Performance Reviews.
              </p>
              
              <div className="story-feature-list">
                <div className="story-feature-item">
                  <Layers size={18} className="story-icon" />
                  <span>Single Source of Employee Truth</span>
                </div>
                <div className="story-feature-item">
                  <ShieldCheck size={18} className="story-icon" />
                  <span>Enterprise Compliance & Security</span>
                </div>
                <div className="story-feature-item">
                  <HeartHandshake size={18} className="story-icon" />
                  <span>Built for Employees & HR Leaders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="about-story-content">
            <span className="eyebrow">OUR STORY</span>
            <h2 className="story-title">
              Built from the everyday friction of managing talent.
            </h2>
            <p className="story-desc">
              WiTalents was built inside the WorkIntely platform to close the gap between hiring,
              people data, growth, and performance — replacing disconnected tools with one intelligent
              system that grows with every organization it serves.
            </p>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="about-stats-grid">
          <div className="stat-card">
            <Users className="stat-icon" size={28} />
            <span className="stat-num">1.4M+</span>
            <span className="stat-desc">Employee records managed</span>
          </div>
          <div className="stat-card">
            <Target className="stat-icon" size={28} />
            <span className="stat-num">38%</span>
            <span className="stat-desc">Reduction in time-to-hire</span>
          </div>
          <div className="stat-card">
            <Globe className="stat-icon" size={28} />
            <span className="stat-num">40+</span>
            <span className="stat-desc">Countries supported</span>
          </div>
          <div className="stat-card">
            <Award className="stat-icon" size={28} />
            <span className="stat-num">99.9%</span>
            <span className="stat-desc">Platform uptime</span>
          </div>
        </div>

      </div>
    </section>
  );
}
