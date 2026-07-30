import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './Hero.css';
import realHumanRobotBg from '../assets/real_human_robot_bg.png';

export default function Hero() {
  const heroRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [fadeState, setFadeState] = useState('visible');

  useEffect(() => {
    let index = 0;
    let isCancelled = false;
    let timerId = null;
    const FULL_TEXT = 'hiring, people operations, learning, and performance.';

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
          timerId = setTimeout(() => {
            if (isCancelled) return;
            setFadeState('fading-out');
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
      gsap.from('.hero-typewriter-tagline', { y: 15, opacity: 0, duration: 0.6, delay: 0.25 });
      gsap.from('.hero-cta-wrap-light', { scale: 0.95, opacity: 0, duration: 0.6, delay: 0.3 });
      gsap.from('.hero-bg-image-right', { x: 50, opacity: 0, duration: 1.2, delay: 0.1 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-wrapper-light" ref={heroRef}>
      {/* Light Abstract Technology Background Video */}
      <div className="hero-bg-video-wrapper">
        <video
          src="https://player.vimeo.com/external/459389137.sd.mp4?s=887d0e4c6c9f6d70df88c0353f81e27e702c2187&profile_id=139&oauth2_token_id=57447761"
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video"
        />
        <div className="hero-bg-video-overlay" />
      </div>

      {/* Real Human & AI Robot Background Image (Right Side) */}
      <div className="hero-bg-image-right">
        <img src={realHumanRobotBg} alt="Real Human and AI Robot" className="hero-bg-img" />
        <div className="hero-bg-image-fade" />
      </div>

      <div className="container hero-container-overlay">
        {/* Eyebrow Badge */}
        <div className="hero-badge-light">
          <span className="badge-dot-purple"></span>
          <span className="badge-text-light">Making Work More Intelligently</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title-light">
          Building AI Solutions that help{' '}
          <span className="purple-highlight-text gradient-shimmer-all">organisations work smarter</span>
        </h1>

        {/* Description */}
        <p className="hero-desc-light">
          starting with talent management and expanding across the enterprise
        </p>

        {/* Dynamic Typewriter Tagline */}
        <div className="hero-typewriter-tagline">
          The intelligent platform for{' '}
          <span className={`purple-highlight-text typewriter-wrap ${fadeState}`}>
            <span className="gradient-shimmer-all">{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </span>
        </div>

        {/* CTA Actions */}
        <div className="hero-cta-wrap-light">
          <Link to="/contact" className="btn-primary-purple btn-no-arrow">
            <MessageSquare size={16} />
            <span>Book a Demo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
