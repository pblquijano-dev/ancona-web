import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import ModalPortal from './ModalPortal';

export default function ProductDetailModal({ product, isOpen, onClose }) {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState('');

  if (!product) return null;

  const images = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const currentImage = images[activeImageIndex] || product.image;

  const handleShareFacebook = () => {
    const shareUrl = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleShareInstagramCopy = () => {
    const textToCopy = t('productModal.shareCopy', { name: product.name, price: product.price, url: window.location.href });
    navigator.clipboard.writeText(textToCopy).then(() => {
      setToastMessage(t('productModal.copiedToast'));
      setTimeout(() => setToastMessage(''), 3500);
    });
  };

  return (
    <ModalPortal isOpen={isOpen} onClose={onClose} type="normal">
      <div className="grid md:grid-cols-2 text-left">
        {/* Left Side: Interactive Multi-Image Gallery Carousel */}
        <div className="bg-surface-container-low flex flex-col justify-center p-6 relative">
          <div className="aspect-square overflow-hidden rounded-sm relative group bg-white shadow-sm">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Discount Badge on Image */}
            {product.hasDiscount && (
              <span className="absolute top-3 right-3 bg-error text-white font-label-caps text-[10px] px-3 py-1 font-semibold shadow-md tracking-wider">
                -{product.discountPercent}% OFF
              </span>
            )}

            {/* Next / Prev Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + images.length) % images.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
                  aria-label="Imagen anterior"
                >
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) => (prev + 1) % images.length)
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
                  aria-label="Imagen siguiente"
                >
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {images.length > 1 && (
            <div className="flex justify-center gap-3 mt-4">
              {images.map((imgUrl, thumbIdx) => (
                <button
                  key={thumbIdx}
                  onClick={() => setActiveImageIndex(thumbIdx)}
                  className={`w-14 h-14 rounded-sm overflow-hidden border-2 transition-all ${activeImageIndex === thumbIdx
                    ? 'border-primary scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Vista ${thumbIdx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Details & Discount Price View */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-secondary font-label-caps tracking-widest font-semibold uppercase">
                {product.metal || product.detail || 'Alta Joyería'}
              </span>

              {product.isBasePrice && (
                <span className="bg-secondary-container text-on-secondary-container text-[10px] font-label-caps px-2 py-0.5 font-semibold">
                  {t('productModal.basePrice')}
                </span>
              )}
            </div>

            <h3 className="font-headline text-2xl md:text-3xl text-primary mb-4">
              {product.name}
            </h3>

            {/* Price View with Discount */}
            <div className="mb-6 flex items-baseline gap-3">
              {product.hasDiscount ? (
                <div className="flex justify-between items-start w-full">
                  <div className="flex flex-col">
                    <span className="line-through text-outline text-sm font-normal">
                      {product.originalPrice}
                    </span>
                    <span className="text-2xl font-headline text-primary font-semibold">
                      {product.price}
                    </span>
                  </div>
                  <span className="bg-error-container text-on-error-container text-[10px] font-label-caps px-2 py-0.5 font-semibold rounded-sm">
                    {t('productModal.youSave')} {product.discountPercent}%
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-headline text-primary font-semibold">
                  {product.price}
                </span>
              )}
            </div>

            <p className="font-body text-on-surface-variant text-sm leading-relaxed font-light mb-6 border-t border-b border-outline-variant/20 py-4">
              {product.desc}
            </p>
          </div>

          {/* Actions & Social Media Share */}
          <div className="space-y-4">
            <button
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="w-full bg-primary hover:bg-secondary-container text-white hover:text-on-secondary-container py-4 px-6 text-center font-label-caps text-xs tracking-[0.2em] transition-all duration-300 shadow-md flex items-center justify-center gap-2 font-semibold"
            >
              <span className="material-symbols-outlined text-lg">shopping_bag</span>
              <span>{t('catalog.addToCartBtn') || 'AÑADIR A LA BOLSA'}</span>
            </button>

            <a
              href={`https://wa.me/5219990000000?text=${encodeURIComponent(
                t('productModal.waConsultPrompt', { name: product.name, price: product.price })
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 text-center font-label-caps text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>{t('productModal.consultWa')}</span>
            </a>

            {/* Social Share Bar */}
            <div className="pt-4 border-t border-outline-variant/15 flex flex-col gap-2">
              <span className="text-[10px] font-label-caps text-on-surface-variant/70 font-semibold tracking-widest uppercase">
                {t('productModal.shareTag')}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareFacebook}
                  className="flex-1 bg-[#1877F2] hover:bg-[#166FE5] text-white py-2 px-3 rounded-sm text-[10px] font-label-caps tracking-wider transition-colors flex items-center justify-center gap-1.5 font-semibold"
                >
                  <span className="material-symbols-outlined text-sm">share</span>
                  <span>{t('productModal.facebook')}</span>
                </button>

                <button
                  onClick={handleShareInstagramCopy}
                  className="flex-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white py-2 px-3 rounded-sm text-[10px] font-label-caps tracking-wider transition-all flex items-center justify-center gap-1.5 font-semibold shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  <span>{t('productModal.instagram')}</span>
                </button>
              </div>

              {toastMessage && (
                <div className="text-[11px] text-secondary font-semibold animate-fadeIn mt-1 text-center bg-surface-container-low p-2 rounded border border-secondary/30">
                  {toastMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
