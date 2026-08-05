import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function FavoritesCarousel() {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const items = t('favorites.items', { returnObjects: true }) || [];

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => ref.removeEventListener('scroll', updateScrollButtons);
    }
  }, [items]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="favorites" className="py-section-gap px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto overflow-hidden">
      {/* Header with Title and Nav Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
        <div>
          <span className="text-label-caps text-secondary mb-3 block tracking-[0.25em]">
            {t('favorites.tagline')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-headline-lg text-primary">
            {t('favorites.title')}
          </h2>
        </div>

        {/* Custom Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-3.5 border transition-all rounded-full flex items-center justify-center ${
              canScrollLeft
                ? 'border-primary text-primary hover:bg-primary hover:text-white cursor-pointer shadow-sm'
                : 'border-outline-variant/40 text-outline-variant/40 cursor-not-allowed'
            }`}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-3.5 border transition-all rounded-full flex items-center justify-center ${
              canScrollRight
                ? 'border-primary text-primary hover:bg-primary hover:text-white cursor-pointer shadow-sm'
                : 'border-outline-variant/40 text-outline-variant/40 cursor-not-allowed'
            }`}
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={carouselRef}
        className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-6 pt-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={item.id || index}
            onClick={() => setSelectedProduct(item)}
            className="group cursor-pointer min-w-[280px] sm:min-w-[320px] md:min-w-[350px] snap-start flex flex-col bg-white border border-outline-variant/20 hover:border-secondary/40 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden"
          >
            {/* Image Container with Badges */}
            <div className="aspect-square bg-surface-container-low overflow-hidden relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Price Tag Badge */}
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-sm tracking-wider shadow-md">
                {item.price}
              </div>

              {/* Quick View Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-label-caps tracking-widest px-5 py-2.5 shadow-lg group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  {t('favorites.quickView') || 'Vista rápida'}
                </span>
              </div>
            </div>

            {/* Info Area */}
            <div className="p-6 flex flex-col flex-grow text-left">
              <span className="text-[11px] text-secondary font-label-caps tracking-widest mb-1 font-semibold">
                {item.detail}
              </span>
              <h3 className="font-headline text-xl text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                {item.name}
              </h3>
              <p className="font-body text-on-surface-variant text-xs line-clamp-2 leading-relaxed font-light mb-4 flex-grow">
                {item.desc}
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-outline-variant/15 text-primary text-xs font-label-caps tracking-wider">
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                  {t('favorites.viewDetails') || 'Ver detalles'} →
                </span>
                <span className="text-secondary font-bold">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-sm overflow-hidden shadow-2xl relative grid md:grid-cols-2 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Modal Image */}
            <div className="aspect-square bg-surface-container-low overflow-hidden relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-8 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs text-secondary font-label-caps tracking-widest block mb-2 font-bold">
                  {selectedProduct.detail}
                </span>
                <h3 className="font-headline text-2xl md:text-3xl text-primary mb-3">
                  {selectedProduct.name}
                </h3>
                <p className="text-2xl font-headline text-secondary mb-6 font-semibold">
                  {selectedProduct.price}
                </p>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed font-light mb-6 border-t border-b border-outline-variant/20 py-4">
                  {selectedProduct.desc}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/5219990000000?text=${encodeURIComponent(
                  t('favorites.waConsultPrompt', { name: selectedProduct.name, price: selectedProduct.price })
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-secondary-container text-white hover:text-on-secondary-container py-4 px-6 text-center font-label-caps text-xs tracking-[0.2em] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>{t('favorites.consultWa')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
