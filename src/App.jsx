import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ProductProvider, useProductModal } from './context/ProductContext';
import { productsData } from './data/products';
import { testimonialsData } from './data/testimonials';
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
import ProductDetailModal from './components/modals/ProductDetailModal';
import useScrollReveal from './hooks/useScrollReveal';

function MainLayout({ productsData, testimonialsData }) {
  const { activeProduct, closeProduct } = useProductModal();

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

      {activeProduct && (
        <ProductDetailModal
          product={activeProduct}
          isOpen={Boolean(activeProduct)}
          onClose={closeProduct}
        />
      )}
    </div>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  useScrollReveal(loading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ProductProvider productsData={productsData}>
      <MainLayout productsData={productsData} testimonialsData={testimonialsData} />
    </ProductProvider>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
