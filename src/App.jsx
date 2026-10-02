import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import QuoteView from './views/QuoteView';
import PartsView from './views/PartsView';
import CapabilitiesView from './views/CapabilitiesView';
import FactoryView from './views/FactoryView';
import QualityView from './views/QualityView';
import ContactView from './views/ContactView';
import Footer from './components/Footer';
import RFQModal from './components/RFQModal';
import CommandKSearch from './components/CommandKSearch';
import { calculateQuote } from './data/srilineData';

// Helper to automatically scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Inner App Content with router hooks
function AppContent() {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState('INR');
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  // Global quotation parameters shared across quick calculator and quote configurator
  const [quoteParams, setQuoteParams] = useState({
    serviceType: 'pcba', // Default to turnkey SMT assembly
    layers: 4,
    lengthMm: 100,
    widthMm: 100,
    quantity: 10,
    thickness: 1.6,
    material: 'FR-4',
    solderMask: 'Green',
    surfaceFinish: 'ENIG (Gold)',
    copperWeight: '1oz',
    isTurnkey: true,
    smdPartsCount: 28,
    thtPartsCount: 6,
    bgaInspection: true,
    conformalCoating: true,
    burnInHours: 24,
  });

  const handleAddToCart = (chip) => {
    setCartCount(prev => prev + 1);
    setCartItems(prev => [...prev, chip]);
  };

  const handleNavigateToQuoteWithChip = (chipId) => {
    if (chipId) {
      navigate(`/quote?part=${chipId}`);
    } else {
      navigate('/quote');
    }
  };

  const handleSearchNavigate = (view) => {
    const routeMap = {
      home: '/',
      quote: '/quote',
      parts: '/parts',
      capabilities: '/capabilities',
      factory: '/factory',
      quality: '/quality',
      contact: '/contact'
    };
    navigate(routeMap[view] || `/${view}`);
    setIsSearchOpen(false);
  };

  const calculatedSummary = calculateQuote({ ...quoteParams, currency });

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900 font-sans flex flex-col selection:bg-[#c5283d] selection:text-white">
      <ScrollToTop />

      {/* 1. Global Multi-Page Navigation Bar */}
      <Navbar 
        currency={currency} 
        setCurrency={setCurrency}
        onOpenRfqModal={() => setIsRfqModalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        cartCount={cartCount}
      />

      {/* 2. Main Segregated Multi-Page Routes */}
      <main className="flex-1 pt-24">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomeView 
                quickQuoteParams={quoteParams}
                setQuickQuoteParams={setQuoteParams}
                onNavigateToQuote={() => navigate('/quote')}
                onNavigateTo={(path) => navigate(`/${path}`)}
                currency={currency}
                onAddToCart={handleAddToCart}
              />
            } 
          />

          <Route 
            path="/quote" 
            element={
              <QuoteView 
                quoteParams={quoteParams}
                setQuoteParams={setQuoteParams}
                currency={currency}
                onOpenRfqModal={() => setIsRfqModalOpen(true)}
              />
            } 
          />

          <Route 
            path="/parts" 
            element={
              <PartsView 
                currency={currency}
                onNavigateToQuote={handleNavigateToQuoteWithChip}
                onAddToCart={handleAddToCart}
              />
            } 
          />

          <Route 
            path="/capabilities" 
            element={
              <CapabilitiesView 
                onNavigateToQuote={() => navigate('/quote')}
              />
            } 
          />

          <Route 
            path="/factory" 
            element={
              <FactoryView 
                onNavigateToQuote={() => navigate('/quote')}
              />
            } 
          />

          <Route 
            path="/quality" 
            element={
              <QualityView 
                onNavigateToQuote={() => navigate('/quote')}
              />
            } 
          />

          <Route 
            path="/contact" 
            element={
              <ContactView 
                onOpenRfqModal={() => setIsRfqModalOpen(true)}
              />
            } 
          />

          {/* Catch-all fallback */}
          <Route 
            path="*" 
            element={
              <HomeView 
                quickQuoteParams={quoteParams}
                setQuickQuoteParams={setQuoteParams}
                onNavigateToQuote={() => navigate('/quote')}
                onNavigateTo={(path) => navigate(`/${path}`)}
                currency={currency}
                onAddToCart={handleAddToCart}
              />
            } 
          />
        </Routes>
      </main>

      {/* 3. Global Industrial Footer */}
      <Footer />

      {/* 4. Interactive Modals */}
      <RFQModal 
        isOpen={isRfqModalOpen}
        onClose={() => setIsRfqModalOpen(false)}
        quoteSummary={{ ...calculatedSummary, quantity: quoteParams.quantity }}
        currency={currency}
      />

      <CommandKSearch 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSearchNavigate}
      />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
