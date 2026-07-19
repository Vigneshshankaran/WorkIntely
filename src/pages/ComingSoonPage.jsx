import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Globe, Award } from 'lucide-react';
import './ComingSoonPage.css';

const statsData = [
  { icon: <Users size={24} />, num: '1.4M+', desc: 'Employee records managed' },
  { icon: <Target size={24} />, num: '38%', desc: 'Reduction in time-to-hire' },
  { icon: <Globe size={24} />, num: '40+', desc: 'Countries supported' },
  { icon: <Award size={24} />, num: '99.9%', desc: 'Platform uptime' }
];

export default function ComingSoonPage({ title, showStats = false }) {
  return (
    <section className="coming-soon-page section-1440">
      <div className="container">
        <div className="cs-minimal-wrap">
          <span className="cs-tag">COMING SOON</span>
          <h1 className="cs-minimal-title">{title}</h1>
          <p className="cs-minimal-sub">This page is under development and will be available soon.</p>
          <div className="cs-minimal-actions">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>

        {/* Stats Grid on Resources / Coming Soon Page */}
        {showStats && (
          <div className="cs-stats-grid">
            {statsData.map((item, i) => (
              <div key={i} className="cs-stat-card">
                <div className="cs-stat-icon">{item.icon}</div>
                <span className="cs-stat-num">{item.num}</span>
                <span className="cs-stat-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
