import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProductSlug, findProductBySlug } from '../utils/slug';

const ProductContext = createContext();

export function ProductProvider({ children, productsData }) {
  const [activeProduct, setActiveProduct] = useState(null);

  // Sync URL query parameter when productsData is loaded or URL changes via popstate
  useEffect(() => {
    const handleUrlSync = () => {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get('producto') || params.get('product');
      if (slug && productsData) {
        const found = findProductBySlug(productsData, slug);
        if (found) {
          setActiveProduct(found);
          return;
        }
      }
      setActiveProduct(null);
    };

    handleUrlSync();

    window.addEventListener('popstate', handleUrlSync);
    return () => window.removeEventListener('popstate', handleUrlSync);
  }, [productsData]);

  const openProduct = (product) => {
    if (!product) return;
    setActiveProduct(product);

    const slug = getProductSlug(product);
    const url = new URL(window.location.href);
    url.searchParams.set('producto', slug);
    window.history.pushState({ productSlug: slug }, '', url.toString());
  };

  const closeProduct = () => {
    setActiveProduct(null);

    const url = new URL(window.location.href);
    if (url.searchParams.has('producto') || url.searchParams.has('product')) {
      url.searchParams.delete('producto');
      url.searchParams.delete('product');
      window.history.pushState({}, '', url.toString());
    }
  };

  return (
    <ProductContext.Provider value={{ activeProduct, openProduct, closeProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductModal() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductModal must be used within a ProductProvider');
  }
  return context;
}
