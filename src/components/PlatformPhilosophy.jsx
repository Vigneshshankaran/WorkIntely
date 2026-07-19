import React from 'react';
import { UserCheck, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import './PlatformPhilosophy.css';

export default function PlatformPhilosophy() {
  return (
    <section className="philosophy-section section-1440">
      <div className="container">
        <div className="philosophy-grid">
          
          {/* Left Column: UI Visual Showcase Card */}
          <div className="philosophy-visual-col">
            <div className="philosophy-visual-panel">
              <div className="philosophy-mockup-card">
                <div className="mockup-header">
                  <div className="avatar-circle">
                    <UserCheck size={20} />
                  </div>
                  <div className="profile-info">
                    <span className="profile-name">Alex Rivera</span>
                    <span className="profile-role">Senior Staff Engineer • Full Lifecycle Active</span>
                  </div>
                  <span className="single-record-badge">
                    <CheckCircle2 size={13} /> Single Record
                  </span>
                </div>

                <div className="mockup-flow-bar">
                  <div className="flow-step active">
                    <span className="flow-step-dot"></span>
                    <span>ATS Sourced</span>
                  </div>
                  <div className="flow-line"></div>
                  <div className="flow-step active">
                    <span className="flow-step-dot"></span>
                    <span>People Directory</span>
                  </div>
                  <div className="flow-line"></div>
                  <div className="flow-step active">
                    <span className="flow-step-dot"></span>
                    <span>Grow Paths</span>
                  </div>
                  <div className="flow-line"></div>
                  <div className="flow-step active">
                    <span className="flow-step-dot"></span>
                    <span>Perform Review</span>
                  </div>
                </div>

                <div className="mockup-metrics-row">
                  <div className="mini-metric-pill">
                    <span className="mini-metric-label">Employee ID</span>
                    <span className="mini-metric-val">#WTI-88402</span>
                  </div>
                  <div className="mini-metric-pill">
                    <span className="mini-metric-label">Data Sync Status</span>
                    <span className="mini-metric-val green-text">100% Real-time</span>
                  </div>
                  <div className="mini-metric-pill">
                    <span className="mini-metric-label">Connected Modules</span>
                    <span className="mini-metric-val">4 of 4 Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="philosophy-content-col">
            <span className="eyebrow">PLATFORM PHILOSOPHY</span>
            
            <h2 className="philosophy-title">
              <span className="philosophy-title-line">One platform.</span>
              <span className="philosophy-title-line">One employee record.</span>
              <span className="philosophy-title-line">One intelligent experience.</span>
            </h2>

            <p className="philosophy-desc">
              Every module in WiTalents shares a single source of employee truth —
              so data flows seamlessly from hiring through performance, with no
              duplicate systems or manual handoffs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
