import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, TrendingUp, Users } from 'lucide-react';
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

const ROTATING_WORDS = ['hiring', 'people data', 'learning', 'performance'];

export default function Hero() {
  const [hoveredBar, setHoveredBar] = useState(2);
  const [displayedText, setDisplayedText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);

  // Typewriter effect with fixed word sizing & smooth pauses
  useEffect(() => {
    const currentWord = ROTATING_WORDS[wordIdx];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 95);
      } else {
        // Hold complete word for 2.2 seconds
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, 50);
      } else {
        // Brief pause before typing next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
        }, 250);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIdx]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge-light', { y: -15, opacity: 0, duration: 0.6 });
      gsap.from('.hero-title-light', { y: 20, opacity: 0, duration: 0.8, delay: 0.1 });
      gsap.from('.hero-desc-light', { y: 15, opacity: 0, duration: 0.6, delay: 0.2 });
      gsap.from('.hero-cta-wrap-light', { scale: 0.95, opacity: 0, duration: 0.6, delay: 0.3 });
      gsap.from('.hero-visual-single', { y: 30, opacity: 0, duration: 0.9, delay: 0.4 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-wrapper-light" ref={heroRef}>
      <div className="container hero-container-single-col">
        
        {/* Eyebrow Badge */}
        <div className="hero-badge-light">
          <span className="badge-dot-purple"></span>
          <span className="badge-text-light">WELCOME TO WORKINTEL</span>
        </div>

        {/* Main Headline with Non-shifting Typewriter Animation */}
        <h1 className="hero-title-light">
          <span className="hero-title-prefix">The intelligent platform for</span>{' '}
          <span className="typewriter-wrapper">
            <span className="typewriter-word">{displayedText}.</span>
            <span className="typewriter-cursor" aria-hidden="true">|</span>
          </span>
        </h1>

        {/* Description */}
        <p className="hero-desc-light">
          WorkIntel unifies hiring, people data, growth, and performance
          into one intelligent system — built around a single employee record.
        </p>

        {/* CTA Actions */}
        <div className="hero-cta-wrap-light">
          <Link to="/contact" className="btn-primary-purple btn-no-arrow">
            <MessageSquare size={16} />
            <span>Book a Demo</span>
          </Link>

          <a href="#modules" className="btn-secondary-light">
            <span>Explore Platform</span>
          </a>
        </div>

        {/* Centered Dashboard Chart Visual */}
        <div className="hero-visual-single">
          <div className="card-ambient-glow"></div>

          {/* Floating Metrics Card */}
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
    </section>
  );
}
