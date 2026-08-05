import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import Hero from './components/Hero';
import TendenciasSection from './components/TendenciasSection';
import CatalogGrid from './components/CatalogGrid';
import ServicesSection from './components/ServicesSection';
import TraditionSection from './components/TraditionSection';
import TestimonialsSection from './components/TestimonialsSection';
import ClosingCTA from './components/ClosingCTA';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import useScrollReveal from './hooks/useScrollReveal';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState({ tendencias: [], catalog: {} });
  const [testimonialsData, setTestimonialsData] = useState([]);

  useScrollReveal(loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, testRes] = await Promise.all([
          fetch('/data/products.json'),
          fetch('/data/testimonials.json')
        ]);

        if (prodRes.ok) {
          const prods = await prodRes.json();
          setProductsData(prods);
        }

        if (testRes.ok) {
          const tests = await testRes.json();
          setTestimonialsData(tests);
        }
      } catch (err) {
        console.error('Error loading JSON resources:', err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />
      <CartDrawer />
      <main>
        <Hero />
        <TendenciasSection items={productsData.tendencias || []} />
        <CatalogGrid catalogData={productsData.catalog || {}} />
        <ServicesSection />
        <TraditionSection />
        <TestimonialsSection testimonialsData={testimonialsData} />
        <ClosingCTA />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
