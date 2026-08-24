import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TestimonialsSection({ testimonialsData = [] }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = testimonialsData.length > 0
    ? testimonialsData
    : t('testimonials.items', { returnObjects: true }) || [];

  const chunkSize = 4;
  const totalPages = Math.ceil(testimonials.length / chunkSize) || 1;

  useEffect(() => {
    if (!isPlaying || totalPages <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPlaying, totalPages]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const startIndex = currentIndex * chunkSize;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + chunkSize);

  return (
    <section className="py-section-gap bg-surface-container-low reveal-on-scroll">
      <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto">
        {/* Header & Compact Icon Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="text-left">
            <span className="text-label-caps text-secondary mb-3 block tracking-[0.25em] font-semibold">
              {t('testimonials.tagline')}
            </span>
            <h2 className="font-headline text-3xl md:text-headline-lg text-primary">
              {t('testimonials.title')}
            </h2>
          </div>

          {/* Small Icon-Only Controls Bar */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-sm cursor-pointer"
              aria-label={t('testimonials.prev')}
              title={t('testimonials.prev')}
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_back</span>
            </button>

            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-sm cursor-pointer"
              aria-label={isPlaying ? t('testimonials.pause') : t('testimonials.play')}
              title={isPlaying ? t('testimonials.pause') : t('testimonials.play')}
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-sm cursor-pointer"
              aria-label={t('testimonials.next')}
              title={t('testimonials.next')}
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid with Fade Animation */}
        <div
          key={currentIndex}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[260px] animate-fadeIn"
        >
          {visibleTestimonials.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-white p-8 border border-outline-variant/20 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm relative flex flex-col justify-between text-left"
            >
              <div>
                <span className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4 opacity-40 block" aria-hidden="true">
                  format_quote
                </span>
                <p className="font-body italic text-sm mb-6 leading-relaxed text-primary font-light line-clamp-4">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-label-caps text-[11px] text-primary font-bold">
                    {item.name}
                  </p>
                  <div className="text-secondary-fixed-dim text-[10px] tracking-widest mt-0.5" aria-label={`Calificación: ${item.stars}`}>
                    {item.stars}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <button
              key={pageIdx}
              onClick={() => setCurrentIndex(pageIdx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                pageIdx === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-outline-variant/40 hover:bg-outline'
              }`}
              aria-label={`Ir a página de testimonios ${pageIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
