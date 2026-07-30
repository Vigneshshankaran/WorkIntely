import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import wiFamilyProducts from '../assets/WI-suites.png';
import './WiFamilyBanner.css';

gsap.registerPlugin(ScrollTrigger);

export default function WiFamilyBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wi-family-banner-img', {
        scrollTrigger: {
          trigger: '.wi-family-banner-wrapper',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wi-family-banner-wrapper" ref={bannerRef}>
      <div className="container-full-width">
        <img
          src={wiFamilyProducts}
          alt="The Wi Family of Products Diagram"
          className="wi-family-banner-img"
        />
      </div>
    </section>
  );
}
