import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Sparkles, Plus, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  pricingProducts,
  enquiryProducts,
  pricingPrinciples,
  pricingFaqs,
  teamSizes,
  SALES_EMAIL
} from '../data/pricingPlans';
import './PricingPage.css';

gsap.registerPlugin(ScrollTrigger);

const emptyForm = {
  fullName: '',
  workEmail: '',
  company: '',
  phone: '',
  product: '',
  teamSize: teamSizes[0],
  notes: ''
};

export default function PricingPage() {
  const [activeProductId, setActiveProductId] = useState(pricingProducts[0].id);
  const [openFaqId, setOpenFaqId] = useState(pricingFaqs[0].id);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const plansRef = useRef(null);
  const isFirstRender = useRef(true);

  const activeProduct = pricingProducts.find((p) => p.id === activeProductId);

  /* Cards ease in on scroll, then re-deal whenever the product tab changes. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.09,
          ease: 'power3.out',
          overwrite: true,
          ...(isFirstRender.current
            ? { scrollTrigger: { trigger: plansRef.current, start: 'top 80%' } }
            : {})
        }
      );
    }, plansRef);

    isFirstRender.current = false;
    return () => ctx.revert();
  }, [activeProductId]);

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.fullName && form.workEmail) setSubmitted(true);
  };

  return (
    <div className="pricing-page">

      {/* Plans: product switcher + the three tiers */}
      <section className="pricing-plans section-light section-1440" ref={plansRef}>
        <div className="container">

          <div className="pricing-head">
            <span className="badge pricing-eyebrow">Plans &amp; Capabilities</span>
            <h1 className="pricing-title">
              Flexible pricing designed around{' '}
              <span className="gradient-text">your business</span>
            </h1>
            <p className="pricing-lead">
              Each Wi Suite product ships in Basic, Standard, and Premium — from core essentials
              to AI-powered intelligence. Pricing is tailored to your team size and region; talk
              to us and we&apos;ll put together a plan that fits.
            </p>
          </div>

          <div className="pricing-tabs-shell">
          <div className="pricing-tabs" role="tablist" aria-label="Products">
            {pricingProducts.map((product) => {
              const isActive = product.id === activeProductId;
              return (
                <button
                  key={product.id}
                  type="button"
                  role="tab"
                  id={`pricing-tab-${product.id}`}
                  aria-selected={isActive}
                  aria-controls="pricing-tabpanel"
                  tabIndex={isActive ? 0 : -1}
                  className={`pricing-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveProductId(product.id)}
                >
                  {product.name}
                </button>
              );
            })}
          </div>
          </div>

          <p className="pricing-strapline">{activeProduct.strapline}</p>

          <div
            className="pricing-grid"
            role="tabpanel"
            id="pricing-tabpanel"
            aria-labelledby={`pricing-tab-${activeProduct.id}`}
          >
            {activeProduct.tiers.map((tier) => (
              <article key={tier.id} className={`pricing-card ${tier.badge ? 'featured' : ''}`}>

                <div className="pricing-card-head">
                  <h2 className="pricing-card-name">{tier.name}</h2>
                  {tier.badge && (
                    <span className="pricing-card-badge">
                      <Sparkles size={13} /> {tier.badge}
                    </span>
                  )}
                </div>

                <p className="pricing-card-summary">{tier.summary}</p>
                {tier.description && (
                  <p className="pricing-card-desc">{tier.description}</p>
                )}

                <span className="pricing-card-label">Typical capabilities include:</span>
                <ul className="pricing-features">
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* One shared call to action for all three tiers */}
          <div className="pricing-plans-action">
            <a href="#find-your-plan" className="btn btn-primary">
              <span>Contact Sales</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* Pricing philosophy */}
      <section className="pricing-principles section-1440">
        <div className="container">
          <h2 className="pricing-section-title">Simple. Transparent. Scalable.</h2>
          <p className="pricing-section-lead">Our pricing philosophy is built on three principles:</p>

          <div className="pricing-principles-grid">
            {pricingPrinciples.map((item) => (
              <div key={item.id} className="pricing-principle">
                <h3 className="pricing-principle-title">{item.title}</h3>
                <p className="pricing-principle-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-faq section-light section-1440">
        <div className="container">
          <h2 className="pricing-section-title">Frequently Asked Questions</h2>

          <div className="pricing-faq-list">
            {pricingFaqs.map((faq) => {
              const isOpen = faq.id === openFaqId;
              return (
                <div key={faq.id} className={`pricing-faq-item ${isOpen ? 'open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      className="pricing-faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    >
                      <span>{faq.question}</span>
                      <Plus size={18} aria-hidden="true" className="pricing-faq-icon" />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="pricing-faq-panel" id={`faq-panel-${faq.id}`}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dark band */}
      <section className="pricing-cta-band section-1440">
        <div className="container">
          <div className="pricing-cta-inner section-dark">
            <h2 className="pricing-cta-title">Not sure which tier fits your team?</h2>
            <p className="pricing-cta-desc">
              Tell us about your business and we&apos;ll recommend the right products and tier —
              no pressure, no pricing games.
            </p>
            <a href="#find-your-plan" className="btn btn-primary pricing-cta-btn">
              <span>Talk to our team</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="pricing-form-section section-light section-1440" id="find-your-plan">
        <div className="container">
          <h2 className="pricing-section-title">Let&apos;s find your plan</h2>
          <p className="pricing-section-lead">
            Fill this in and our team will reach out with pricing tailored to your business.
          </p>

          {submitted ? (
            <div className="pricing-form-card pricing-form-success" role="status">
              <CheckCircle size={28} />
              <h3>Thanks — we&apos;ve got your details.</h3>
              <p>
                Our team will be in touch shortly. If it&apos;s urgent, email us at{' '}
                <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>.
              </p>
            </div>
          ) : (
            <form className="pricing-form-card" onSubmit={handleSubmit}>
              <div className="pricing-field-row">
                <label className="pricing-field">
                  <span>Full Name</span>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Patel"
                    value={form.fullName}
                    onChange={setField('fullName')}
                  />
                </label>

                <label className="pricing-field">
                  <span>Work Email</span>
                  <input
                    type="email"
                    required
                    placeholder="jordan@yourcompany.com"
                    value={form.workEmail}
                    onChange={setField('workEmail')}
                  />
                </label>
              </div>

              <div className="pricing-field-row">
                <label className="pricing-field">
                  <span>Company Name</span>
                  <input
                    type="text"
                    placeholder="Acme Staffing Pvt. Ltd."
                    value={form.company}
                    onChange={setField('company')}
                  />
                </label>

                <label className="pricing-field">
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={setField('phone')}
                  />
                </label>
              </div>

              <label className="pricing-field">
                <span>Which product are you interested in?</span>
                <select value={form.product} onChange={setField('product')}>
                  <option value="">Select a product</option>
                  {enquiryProducts.map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </label>

              <label className="pricing-field">
                <span>Approximate Team Size</span>
                <select value={form.teamSize} onChange={setField('teamSize')}>
                  {teamSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </label>

              <label className="pricing-field">
                <span>Anything we should know?</span>
                <textarea
                  rows={4}
                  placeholder="e.g. We're a staffing agency placing candidates across two cities..."
                  value={form.notes}
                  onChange={setField('notes')}
                />
              </label>

              <button type="submit" className="btn btn-primary pricing-submit">
                <span>Send my details</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
