import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import DiscountBanner from './components/DiscountBanner';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WhyContentPage from './pages/WhyContentPage';
import CaseStudyPage from './pages/CaseStudyPage';
import PortfolioPage from './pages/PortfolioPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import { useParallax } from './hooks/useParallax';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const navOffset = 110;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: 'smooth',
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function App() {
  useParallax();

  return (
    <Router>
      <ScrollManager />
      <DiscountBanner />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-content" element={<WhyContentPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
