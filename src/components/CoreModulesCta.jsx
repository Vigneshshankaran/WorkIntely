import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CoreModulesCta.css';

gsap.registerPlugin(ScrollTrigger);

/* Each panel holds the module tags that category already lists on the solution
   page — no extra copy, just the links. */
const coreModules = [
  {
    id: 'staffing',
    number: '01',
    title: 'Staffing Core Modules',
    tags: [
      { label: 'Talent Sourcing', href: '/WiTalents' },
      { label: 'Candidate Matching', href: '/WiTalents' },
      { label: 'Recruitment', href: '/WiTalents' },
      { label: 'Client Management', href: '/WiTalents' }
    ]
  },
  {
    id: 'human-resource',
    number: '02',
    title: 'Human Resource Core Modules',
    tags: [
      { label: 'ATS', href: '/WiTalents' },
      { label: 'Employee Records', href: '/WiPeople' },
      { label: 'Skill Development', href: '/WiGrow' },
      { label: 'Performance', href: '/WiPerform' }
    ]
  },
  {
    id: 'operations',
    number: '03',
    title: 'Operations Core Modules',
    tags: [
      { label: 'CRM', href: '/WiSales' },
      { label: 'Accounts Receivables', href: '/WiBooks' },
      { label: 'Accounts Payables', href: '/WiBooks' }
    ]
  }
];

export default function CoreModulesCta() {
  const [openId, setOpenId] = useState(coreModules[0].id);
  const sectionRef = useRef(null);
  const panelRefs = useRef({});

  /* Height tweens run per panel: open to measured auto height, closed to 0. */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    coreModules.forEach(({ id }) => {
      const panel = panelRefs.current[id];
      if (!panel) return;

      const isOpen = id === openId;
      const target = { height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 };

      if (reduced) {
        gsap.set(panel, target);
      } else {
        gsap.to(panel, { ...target, duration: 0.4, ease: 'power2.out', overwrite: true });
      }
    });
  }, [openId]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const trigger = { trigger: sectionRef.current, start: 'top 85%' };

        gsap.fromTo('.core-cta-card',
          { scale: 0.98, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out', scrollTrigger: trigger }
        );
        gsap.fromTo('.core-cta-item',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.09, delay: 0.2, ease: 'power2.out', scrollTrigger: trigger }
        );
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="core-cta-section section-light section-1440" ref={sectionRef}>
      <div className="container">
        <div className="core-cta-card">

          <div className="core-cta-list">
            {coreModules.map((item) => {
              const isOpen = item.id === openId;
              return (
                <div key={item.id} className={`core-cta-item ${isOpen ? 'open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      className="core-cta-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`core-panel-${item.id}`}
                      id={`core-trigger-${item.id}`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      <span className="core-cta-num">{item.number}</span>
                      <span className="core-cta-row-title">{item.title}</span>
                      <Plus size={20} className="core-cta-icon" aria-hidden="true" />
                    </button>
                  </h3>

                  <div
                    className="core-cta-panel"
                    id={`core-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`core-trigger-${item.id}`}
                    ref={(el) => { panelRefs.current[item.id] = el; }}
                  >
                    <div className="core-cta-panel-inner">
                      <div className="core-cta-tags">
                        {item.tags.map((tag) => (
                          <Link key={tag.label} to={tag.href} className="core-cta-tag">
                            {tag.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
