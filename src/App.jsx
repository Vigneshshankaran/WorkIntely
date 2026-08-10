import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ComingSoonPage from './pages/ComingSoonPage';
/* Solutions is hidden for now — restore this import with the route below. */
// import ModulesPage from './pages/ModulesPage';
/* Standalone platform page is hidden — restore this import with its route. */
// import PlatformPage from './pages/PlatformPage';
import PricingPage from './pages/PricingPage';
import ProductPage from './pages/ProductPage';
import IndustryEducationPage from './pages/IndustryEducationPage';

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
            {/* The index is what the navbar's "Platform" item points to. */}
            <Route path="/" element={<HomePage />} />
            {/* Standalone platform page hidden — restore with:
                <Route path="/platform" element={<PlatformPage />} /> */}
            {/* Hidden for now — un-comment to bring the solution page back.
                <Route path="/solution" element={<ModulesPage />} /> */}
            <Route path="/WiTalents" element={<ProductPage productId="WiTalents" />} />
            <Route path="/WiPeople" element={<ProductPage productId="WiPeople" />} />
            <Route path="/WiGrow" element={<ProductPage productId="WiGrow" />} />
            <Route path="/WiPerform" element={<ProductPage productId="WiPerform" />} />
            <Route path="/WiSales" element={<ProductPage productId="WiSales" />} />
            <Route path="/WiBooks" element={<ProductPage productId="WiBooks" />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route
              path="/business-login"
              element={<ComingSoonPage title="Business Login Coming Soon" />}
            />
            <Route
              path="/candidate-login"
              element={<ComingSoonPage title="Candidate Login Coming Soon" />}
            />
            <Route
              path="/login"
              element={<ComingSoonPage title="Login Coming Soon" />}
            />
            <Route path="/industry-solutions" element={<IndustryEducationPage />} />
            <Route
              path="/community"
              element={<ComingSoonPage title="Community Coming Soon" />}
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
