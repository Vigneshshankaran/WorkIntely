import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productPages, IMAGES } from '../data/productPages';
import './PlatformExplorer.css';

gsap.registerPlugin(ScrollTrigger);

/* Tab order across the platform. Every entry but the last reads its copy and
   artwork from productPages, so the tabs never drift from the product pages. */
const TAB_IDS = ['WiTalents', 'WiPeople', 'WiGrow', 'WiPerform', 'WiSales', 'WiBooks'];

/* Closing tab — the connective layer rather than a single module. */
const unifiedTab = {
  id: 'unified',
  name: 'Unified Talent Intelligence',
  icon: Sparkles,
  tagline:
    'Connect hiring, records, learning, performance, sales, and financial planning into one real-time enterprise layer.',
  href: '/contact',
  image: IMAGES.unified,
  imageAlt: 'An analytics dashboard bringing several data streams together'
};

const tabs = [
  ...TAB_IDS.map((id) => {
    const product = productPages[id];
    return {
      id,
      name: product.name,
      icon: product.icon,
      tagline: product.tagline,
      href: `/${id}`,
      image: product.platform.image,
      imageAlt: product.platform.imageAlt
    };
  }),
  unifiedTab
];

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function PlatformExplorer() {
  const [activeId, setActiveId] = useState(tabs[0].id);

  const sectionRef = useRef(null);
  const tabsRef = useRef(null);
  const pillRef = useRef(null);
  const tabRefs = useRef({});
  const isFirstRender = useRef(true);

  const activeIndex = tabs.findIndex((t) => t.id === activeId);
  const active = tabs[activeIndex];
  const ActiveIcon = active.icon;

  /* The highlight pill is one element that slides between tabs rather than a
     background toggled per button — measured from layout so it survives the
     row wrap and the mobile scroller. */
  useLayoutEffect(() => {
    const place = (animate) => {
      const button = tabRefs.current[activeId];
      const pill = pillRef.current;
      if (!button || !pill) return;

      const box = {
        x: button.offsetLeft,
        y: button.offsetTop,
        width: button.offsetWidth,
        height: button.offsetHeight
      };

      if (animate && !prefersReducedMotion()) {
        gsap.to(pill, { ...box, duration: 0.45, ease: 'power3.out', overwrite: true });
      } else {
        gsap.set(pill, { ...box, autoAlpha: 1 });
      }
    };

    place(!isFirstRender.current);
    gsap.set(pillRef.current, { autoAlpha: 1 });

    /* Re-measure whenever layout moves under it: the row rewrapping, a late web
       font, or the scrollbar appearing once images load and narrow the page. */
    const observer = new ResizeObserver(() => place(false));
    if (tabsRef.current) observer.observe(tabsRef.current);
    observer.observe(document.body);

    document.fonts?.ready.then(() => place(false));

    return () => observer.disconnect();
  }, [activeId]);

  /* Swap animation for the detail panel — skipped on the first paint, which the
     scroll-in timeline below already covers. */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.platform-explorer-copy > *',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: 'power2.out', overwrite: true }
      );
      gsap.fromTo(
        '.platform-explorer-visual',
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.55, ease: 'power3.out', overwrite: true }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeId]);

  /* Entrance on scroll. */
  useEffect(() => {
    const mm = gsap.matchMedia();

    /* fromTo, not from: StrictMode mounts twice, and a bare `from` re-records
       the mid-revert value as its end state, leaving elements stuck invisible. */
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const trigger = { trigger: sectionRef.current, start: 'top 78%' };

      gsap.fromTo('.platform-explorer-title',
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', scrollTrigger: trigger }
      );
      gsap.fromTo('.platform-explorer-tab',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out', scrollTrigger: trigger }
      );
      gsap.fromTo('.platform-explorer-panel',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.15, ease: 'power3.out', scrollTrigger: trigger }
      );
    });

    return () => mm.revert();
  }, []);

  /* Left/right arrows move between tabs, per the tablist pattern. */
  const onKeyDown = (event) => {
    const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!offset) return;

    event.preventDefault();
    const next = tabs[(activeIndex + offset + tabs.length) % tabs.length];
    setActiveId(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section id="modules" className="platform-explorer-section section-dark" ref={sectionRef}>
      <div className="container">

        <h2 className="platform-explorer-title">
          The only talent platform you&apos;ll ever need
        </h2>

        <div
          className="platform-explorer-tabs"
          role="tablist"
          aria-label="Platform capabilities"
          onKeyDown={onKeyDown}
          ref={tabsRef}
        >
          <span className="platform-explorer-pill" ref={pillRef} aria-hidden="true" />

          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`platform-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls="platform-tabpanel"
                tabIndex={isActive ? 0 : -1}
                ref={(el) => { tabRefs.current[tab.id] = el; }}
                className={`platform-explorer-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveId(tab.id)}
              >
                <TabIcon size={17} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        <div
          className="platform-explorer-panel"
          role="tabpanel"
          id="platform-tabpanel"
          aria-labelledby={`platform-tab-${active.id}`}
        >
          <div className="platform-explorer-copy">
            <h3 className="platform-explorer-panel-title">
              <ActiveIcon size={26} />
              <span>{active.name}</span>
            </h3>
            <p className="platform-explorer-panel-desc">{active.tagline}</p>
            <Link to={active.href} className="platform-explorer-link">
              Explore {active.name}
            </Link>
          </div>

          <div className="platform-explorer-visual">
            <img src={active.image} alt={active.imageAlt} />
          </div>
        </div>

      </div>
    </section>
  );
}
