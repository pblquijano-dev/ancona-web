import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { useProductModal } from '../context/ProductContext';
import ModalPortal from './modals/ModalPortal';
import ProductSearchFilter from './ProductSearchFilter';
import SlavesImage from '../assets/images/photos/slaves.jpg';
import RingsImage from '../assets/images/photos/rings.jpg';
import NecklacesImage from '../assets/images/photos/necklaces.jpg';
import EarringsImage from '../assets/images/photos/earrings.jpg';
import CharmsImage from '../assets/images/photos/charm-bracelet.jpg';
import CustomImage from '../assets/images/photos/custom-jewelry.jpg';

const CATEGORY_IMAGES = {
  rings: RingsImage,
  earrings: EarringsImage,
  chains: NecklacesImage,
  pulseras: SlavesImage,
  dijes: CharmsImage,
  custom: CustomImage
};

export default function CatalogGrid({ catalogData = {} }) {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { openProduct } = useProductModal();
  const [activeCategoryModal, setActiveCategoryModal] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { key: 'rings', label: t('catalog.categories.rings'), image: CATEGORY_IMAGES.rings },
    { key: 'earrings', label: t('catalog.categories.earrings'), image: CATEGORY_IMAGES.earrings },
    { key: 'chains', label: t('catalog.categories.chains'), image: CATEGORY_IMAGES.chains },
    { key: 'pulseras', label: t('catalog.categories.pulseras'), image: CATEGORY_IMAGES.pulseras },
    { key: 'dijes', label: t('catalog.categories.dijes'), image: CATEGORY_IMAGES.dijes },
    { key: 'custom', label: t('catalog.categories.custom'), image: CATEGORY_IMAGES.custom, isCustom: true }
  ];

  const getCategoryItems = (catKey) => {
    return catalogData[catKey] || [];
  };

  const rawModalItems = activeCategoryModal ? getCategoryItems(activeCategoryModal.key) : [];

  // Filter by subcategory and real-time search term (fuzzy match name or desc)
  const filteredModalItems = rawModalItems.filter((item) => {
    const matchesSubcategory =
      activeCategoryModal?.key !== 'rings' ||
      selectedSubcategory === 'all' ||
      item.subcategory === selectedSubcategory;

    if (!searchTerm.trim()) return matchesSubcategory;

    const term = searchTerm.toLowerCase();
    const nameMatch = item.name.toLowerCase().includes(term);
    const descMatch = item.desc && item.desc.toLowerCase().includes(term);

    return matchesSubcategory && (nameMatch || descMatch);
  });

  const handleOpenCategory = (cat) => {
    setSelectedSubcategory('all');
    setSearchTerm('');
    setActiveCategoryModal(cat);
  };

  return (
    <section id="catalog" className="bg-surface-container-low py-section-gap reveal-on-scroll">
      <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto">
        {/* Title Left Aligned */}
        <div className="text-left mb-16 md:mb-20">
          <span className="text-label-caps text-secondary mb-3 block tracking-[0.25em] font-semibold uppercase">
            {t('catalog.tagline')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-headline-lg mb-3 text-primary">
            {t('catalog.title')}
          </h2>
          <p className="font-body text-on-surface-variant text-sm md:text-base font-light max-w-2xl">
            {t('catalog.subtitle') ||
              'Haz clic en cualquiera de las 6 categorías para desplegar los modelos a la venta.'}
          </p>
        </div>

        {/* 6 Main Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {categories.map((cat) => {
            const itemCount = getCategoryItems(cat.key).length;
            return (
              <div
                key={cat.key}
                onClick={() => handleOpenCategory(cat)}
                className="relative aspect-square overflow-hidden group shadow-md rounded-sm cursor-pointer border border-outline-variant/20 sm:last:col-span-1"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 flex flex-col items-center justify-end pb-8 px-6 transition-all duration-500 group-hover:from-black/95">
                  <span className="text-white font-headline text-2xl md:text-3xl tracking-wider mb-2 text-center drop-shadow-md">
                    {cat.label}
                  </span>

                  <span className="text-white/75 text-[11px] font-label-caps tracking-widest uppercase mb-4">
                    {cat.isCustom
                      ? t('catalog.customBasePrice')
                      : `${itemCount} ${itemCount === 1 ? t('catalog.modelAvailable') : t('catalog.modelsAvailable')}`}
                  </span>

                  <button className="bg-white/15 backdrop-blur-md border border-white/40 text-white text-[10px] px-6 py-3 font-label-caps tracking-[0.2em] uppercase group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-lg font-semibold">
                    {t('catalog.viewCollection')} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Page Category Catalog Modal */}
      {activeCategoryModal && (
        <ModalPortal
          isOpen={Boolean(activeCategoryModal)}
          onClose={() => setActiveCategoryModal(null)}
          type="full-page"
          title={`${t('catalog.modalTitle')} ${activeCategoryModal.label}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Real-time Search Input */}
            <ProductSearchFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder={t('catalog.searchPlaceholder', { category: activeCategoryModal.label })}
            />

            {/* Ring Subcategories Selector Filter */}
            {activeCategoryModal.key === 'rings' && (
              <div className="bg-white p-4 rounded-sm border border-outline-variant/20 flex items-center gap-3 overflow-x-auto mb-6">
                <span className="text-xs font-label-caps text-on-surface-variant font-semibold mr-2">
                  {t('catalog.subCategoryLabel')}
                </span>
                {['all', 'boda', 'compromiso', 'otros'].map((subKey) => (
                  <button
                    key={subKey}
                    onClick={() => setSelectedSubcategory(subKey)}
                    className={`px-4 py-2 rounded-full text-xs font-label-caps tracking-wider transition-all ${selectedSubcategory === subKey
                      ? 'bg-primary text-white font-semibold shadow-sm'
                      : 'bg-surface-container hover:bg-outline-variant/30 text-on-surface-variant'
                      }`}
                  >
                    {t(`catalog.subcategories.${subKey}`)}
                  </button>
                ))}
              </div>
            )}

            {/* Subtitle Banner */}
            <div className="bg-surface-container-low px-6 py-3 rounded-sm text-xs font-body text-on-surface-variant text-left border border-outline-variant/15 flex items-center justify-between mb-8">
              <span>{t('catalog.modalSubtitle')}</span>
              <span className="font-semibold text-secondary">
                {filteredModalItems.length} {t('catalog.itemsFound')}
              </span>
            </div>

            {/* Modal Products Grid - Original Headline Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 text-left">
              {filteredModalItems.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-outline-variant/20 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image Container with Floating Price & Hover Overlay */}
                  <div
                    className="aspect-square bg-surface-container-low overflow-hidden relative cursor-pointer"
                    onClick={() => openProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-label-caps px-2.5 py-1 rounded-sm font-semibold shadow-sm">
                      {product.metal}
                    </span>

                    {/* Floating Price Tag matching Tendencias */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                      {product.hasDiscount && (
                        <span className="bg-error text-white font-label-caps text-[10px] px-2 py-1 font-semibold shadow-md">
                          -{product.discountPercent}%
                        </span>
                      )}
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 shadow-md">
                        {product.price}
                      </span>
                    </div>

                    {/* Floating Hover Overlay for Details */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 backdrop-blur-md text-primary text-xs font-label-caps tracking-widest px-5 py-2.5 shadow-xl flex items-center gap-1.5 font-semibold">
                        <span className="material-symbols-outlined text-base">visibility</span>
                        {t('tendencias.viewDetails')}
                      </span>
                    </div>
                  </div>

                  {/* Product Details & Single Add-to-Cart Action */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h4
                        onClick={() => openProduct(product)}
                        className="font-headline text-xl text-primary mb-2 group-hover:text-secondary transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h4>
                      <p className="font-body text-on-surface-variant text-xs font-light mb-6 line-clamp-2 leading-relaxed">
                        {product.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/15">
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-primary hover:bg-secondary-container text-white hover:text-on-secondary-container py-3 px-4 text-center font-label-caps text-[11px] tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm font-semibold"
                      >
                        <span className="material-symbols-outlined text-base">
                          shopping_bag
                        </span>
                        <span>{t('catalog.addToCartBtn') || 'AÑADIR A LA BOLSA'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalPortal>
      )}
    </section>
  );
}
