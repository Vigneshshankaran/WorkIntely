import React, { useEffect, useRef, useState } from 'react';
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

const FULL_TEXT = 'hiring, people data, learning, and performance.';

export default function Hero() {
  const heroRef = useRef(null);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [displayText, setDisplayText] = useState('');
  const [fadeState, setFadeState] = useState('visible');

  useEffect(() => {
    let index = 0;
    let isCancelled = false;
    let timerId = null;

    function runTypingSequence() {
      if (isCancelled) return;
      index = 0;
      setDisplayText('');
      setFadeState('visible');

      const interval = setInterval(() => {
        if (isCancelled) {
          clearInterval(interval);
          return;
        }
        index++;
        if (index <= FULL_TEXT.length) {
          setDisplayText(FULL_TEXT.slice(0, index));
        } else {
          clearInterval(interval);
          // Hold full text for 6.5s so it is easy to read
          timerId = setTimeout(() => {
            if (isCancelled) return;
            setFadeState('fading-out');
            // Smooth 0.8s fade out before restarting
            timerId = setTimeout(() => {
              if (isCancelled) return;
              runTypingSequence();
            }, 800);
          }, 6500);
        }
      }, 70);
    }

    runTypingSequence();

    return () => {
      isCancelled = true;
      if (timerId) clearTimeout(timerId);
    };
  }, []);

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

        {/* Main Headline with Slow & Smooth Full Text Typing Animation */}
        <h1 className="hero-title-light">
          The intelligent platform for{' '}
          <span className={`purple-highlight-text typewriter-full-wrap ${fadeState}`}>
            <span className="gradient-shimmer-all">{displayText}</span>
            <span className="typewriter-cursor">|</span>
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
