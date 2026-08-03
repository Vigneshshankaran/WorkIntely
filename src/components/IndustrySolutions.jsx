import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './IndustrySolutions.css';

const INDUSTRIES = [
  { value: 'staffing', label: 'Staffing Company' },
  { value: 'corporates', label: 'Corporates' },
  { value: 'institution', label: 'Institution' }
];

export default function IndustrySolutions() {
  const [industry, setIndustry] = useState('');

  return (
    <section className="industry-solutions-section section-1440">
      <div className="container">
        <div className="industry-solutions-card section-dark">
          <span className="industry-solutions-eyebrow">Industry Solutions</span>

          <h2 className="industry-solutions-title">
            View solutions built for your unique industry challenges.
          </h2>

          <div className="industry-solutions-controls">
            <div className="industry-select-wrap">
              <select
                className="industry-select"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                aria-label="Select your industry"
              >
                <option value="" disabled>Select your industry</option>
                {INDUSTRIES.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
              <ChevronDown size={18} className="industry-select-icon" aria-hidden="true" />
            </div>

            {industry && (
              <Link to="/industry-solutions" className="btn btn-primary industry-discover-btn">
                <span>Discover solutions</span>
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
