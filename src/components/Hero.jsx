import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './Hero.css';

const chartData = [
  { month: 'Feb', height: 42, val: '3,360 Candidates' },
  { month: 'Mar', height: 58, val: '4,640 Screened' },
  { month: 'Apr', height: 74, val: '5,920 Matched' },
  { month: 'May', height: 98, val: '7,840 Interviewed' },
  { month: 'Jun', height: 66, val: '5,280 Onboarded' }
];

/* The four platform modules, as the rotating object of the headline */
const ROTATING_WORDS = ['hiring', 'people data', 'learning', 'performance'];

const heroStats = [
  { num: '1.4M+', label: 'employee records' },
  { num: '38%', label: 'faster time-to-hire' },
  { num: '40+', label: 'countries supported' },
  { num: '99.9%', label: 'platform uptime' }
];

export default function Hero() {
  const [hoveredBar, setHoveredBar] = useState(2);
  const [wordIndex, setWordIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-visual', { y: 20, duration: 0.8, delay: 0.2 });
      gsap.from('.hero-stat', { y: 16, duration: 0.6, stagger: 0.08, delay: 0.4 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-wrapper" ref={heroRef}>
      <div className="container hero-grid">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">The intelligent</span>
            <span className="hero-title-line">platform for</span>
            <span className="rotator" aria-label={ROTATING_WORDS.join(', ')}>
              <span key={ROTATING_WORDS[wordIndex]} className="rotator-word-active">
                {ROTATING_WORDS[wordIndex]}.
              </span>
            </span>
          </h1>

          <p className="hero-description">
            WorkIntely unifies hiring, people data, growth, and performance
            into one intelligent system — built around a single employee record.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              <MessageSquare size={16} />
              <span>Talk to Us</span>
            </Link>

            <a href="#modules" className="learn-more-link">
              <span>Explore Platform</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Product Visual */}
        <div className="hero-visual">
          <div className="card-ambient-glow"></div>

          {/* Floating Card: Active Talent Pool */}
          <div className="savings-floating-card">
            <div className="savings-icon-wrapper">
              <Users size={20} className="wallet-icon" />
            </div>
            <div className="savings-info">
              <span className="card-subtitle">Active Talent Pool</span>
              <div className="savings-amount">375,809</div>
              <div className="trend-badge positive">
                <TrendingUp size={13} />
                <span>+9.2% candidate velocity</span>
              </div>
            </div>
          </div>

          {/* Main Chart Card */}
          <div className="income-main-card">
            <div className="income-card-header">
              <span className="card-subtitle">AI Talent Match Rate</span>
              <div className="income-amount">98.4%</div>
              <div className="trend-badge positive purple-trend">
                <TrendingUp size={14} />
                <span>+2.1% vs last quarter</span>
              </div>
            </div>

            <div className="chart-wrapper">
              <div className="chart-y-axis">
                <span>8k</span>
                <span>6k</span>
                <span>4k</span>
                <span>2k</span>
                <span>0</span>
              </div>

              <div className="chart-bars-area">
                <div className="chart-grid-lines">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>

                <div className="bars-flex">
                  {chartData.map((item, index) => (
                    <div
                      key={index}
                      className={`bar-container ${hoveredBar === index ? 'active' : ''}`}
                      onMouseEnter={() => setHoveredBar(index)}
                    >
                      {hoveredBar === index && (
                        <div className="bar-tooltip">{item.val}</div>
                      )}
                      <div
                        className="lime-bar"
                        style={{ height: `${item.height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>

                <div className="chart-x-axis">
                  {chartData.map((item, idx) => (
                    <span key={idx}>{item.month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Honest social proof: platform stats, not fake logos */}
      <div className="container">
        <div className="hero-stats" role="list">
          {heroStats.map((s) => (
            <div className="hero-stat" role="listitem" key={s.label}>
              <span className="hero-stat-num">{s.num}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
