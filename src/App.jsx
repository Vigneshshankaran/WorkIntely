import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ComingSoonPage from './pages/ComingSoonPage';
import ModulesPage from './pages/ModulesPage';
import WiTalentsPage from './pages/WiTalentsPage';

/* Scrolls to top on route change, or to the anchor when a hash is present
   (makes cross-page links like /#modules work). */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="workintel-app">
        <ScrollManager />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solution" element={<ModulesPage />} />
            <Route path="/WiTalents" element={<WiTalentsPage />} />
            <Route path="/WiPeople" element={<ComingSoonPage title="Wi People Coming Soon" />} />
            <Route path="/WiGrow" element={<ComingSoonPage title="Wi Grow Coming Soon" />} />
            <Route path="/WiPerform" element={<ComingSoonPage title="Wi Perform Coming Soon" />} />
            <Route path="/WiSales" element={<ComingSoonPage title="Wi Sales Coming Soon" />} />
            <Route path="/WiBooks" element={<ComingSoonPage title="Wi Books Coming Soon" />} />
            <Route 
              path="/resources" 
              element={<ComingSoonPage title="Resources Coming Soon" />} 
            />
            <Route 
              path="/login" 
              element={<ComingSoonPage title="Login Coming Soon" />} 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* CTA Banner Above Footer */}
        <CtaBanner />
        
        <Footer />
      </div>
    </Router>
  );
}
