import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { useProductModal } from '../context/ProductContext';

export default function TendenciasSection({ items = [] }) {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { openProduct } = useProductModal();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? items : items.slice(0, 3);

  return (
    <section
      id="tendencias"
      className="py-section-gap px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto reveal-on-scroll"
    >
      {/* Header Left Aligned */}
      <div className="text-left mb-12 md:mb-16">
        <span className="text-label-caps text-secondary mb-3 block tracking-[0.25em] font-semibold">
          {t('tendencias.tagline') || 'COLECCIÓN DESTACADA & TENDENCIAS'}
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-headline-lg text-primary mb-3">
          {t('tendencias.title') || 'Tendencias Ancona'}
        </h2>
        <p className="font-body text-on-surface-variant text-sm md:text-base font-light max-w-2xl">
          {t('tendencias.subtitle') ||
            'Galería de piezas seleccionadas. Haz clic en cualquier imagen para ver su descripción o agrégala directamente a tu bolsa.'}
        </p>
      </div>

      {/* Integrated Asymmetric Mosaic Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 ease-in-out">
        {visibleItems.map((item, idx) => {
          const isFeatured = idx === 0 || idx === 3;
          return (
            <div
              key={item.id || idx}
              className={`bg-white border border-outline-variant/20 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group text-left flex flex-col animate-fadeIn ${isFeatured ? 'sm:col-span-1 lg:col-span-2' : ''
                }`}
            >
              {/* Product Image & Badges */}
              <div
                className={`overflow-hidden relative bg-surface-container-low cursor-pointer ${isFeatured ? 'aspect-[16/9]' : 'aspect-square'
                  }`}
                onClick={() => openProduct(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[10px] font-label-caps px-3 py-1 uppercase tracking-widest font-semibold">
                  {item.detail}
                </span>

                {/* Floating Price & Discount Badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  {item.hasDiscount && (
                    <span className="bg-error text-white font-label-caps text-[10px] px-2 py-1 font-semibold shadow-md">
                      -{item.discountPercent}%
                    </span>
                  )}
                  <span className="bg-primary text-white text-xs font-semibold px-3.5 py-1.5 shadow-md">
                    {item.price}
                  </span>
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="bg-white/95 backdrop-blur-md text-primary text-xs font-label-caps tracking-widest px-5 py-2.5 shadow-xl flex items-center gap-1.5 font-semibold">
                    <span className="material-symbols-outlined text-base" aria-hidden="true">visibility</span>
                    {t('tendencias.viewDetails')}
                  </span>
                </div>
              </div>

              {/* Product Info & Add to Cart */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3
                    onClick={() => openProduct(item)}
                    className="font-headline text-xl text-primary mb-2 cursor-pointer group-hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-xs font-light leading-relaxed mb-6 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/15">
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-primary hover:bg-secondary-container text-white hover:text-on-secondary-container py-3 px-4 text-center font-label-caps text-[11px] tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm font-semibold cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base" aria-hidden="true">
                      shopping_bag
                    </span>
                    <span>{t('tendencias.addToCart') || 'Añadir a la bolsa'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expand / Collapse Button Bar */}
      {items.length > 3 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant/30 hover:bg-primary hover:text-white px-8 py-3.5 text-primary rounded-full text-xs font-label-caps tracking-[0.2em] transition-all duration-300 font-semibold shadow-sm cursor-pointer"
          >
            <span>{isExpanded ? t('tendencias.seeLess') : t('tendencias.seeMore')}</span>
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              {isExpanded ? 'expand_less' : 'expand_more'}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
