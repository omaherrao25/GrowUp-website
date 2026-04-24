import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WhyContentPage from './pages/WhyContentPage';
import CaseStudyPage from './pages/CaseStudyPage';
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
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-content" element={<WhyContentPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <ChatWidget />
    </Router>
  );
}

export default App;
