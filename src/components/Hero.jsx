import React from 'react';
import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../utils/scroll';
import logo from '../assets/images/ancona-hero.png';
import hero from '../assets/images/hero.jpg';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 md:py-24">
      {/* Background Image with Dark Vignette Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Luxury jewelry hero background Mérida"
          className="w-full h-full object-cover object-position-center transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/35"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl px-edge-margin-mobile flex flex-col items-center">
        {/* Luxury Brand Logo */}
        <img
          src={logo}
          alt="Ancona Joyería"
          className="h-20 md:h-28 lg:h-32 w-auto mb-1 object-contain filter brightness-0 invert drop-shadow-md"
        />
        <span className="text-label-caps text-white mb-4 md:mb-6 block !tracking-[0.4em] !font-light opacity-70">
          {t('hero.tagline')}
        </span>

        {/* Hero Title */}
        <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-white mb-6 !leading-[1.08] tracking-tight drop-shadow-lg max-w-4xl font-normal">
          {t('hero.title')}
        </h1>

        {/* Hero Subtitle */}
        <p className="font-body text-white/85 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide drop-shadow-sm">
          {t('hero.subtitle')}
        </p>

        {/* Glassmorphic Luxury CTA Button */}
        <a
          href="https://wa.me/5219990000000"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-stone-900 border border-white/40 hover:border-white px-8 md:px-10 py-4 font-label-caps text-xs md:text-sm tracking-[0.25em] uppercase transition-all duration-500 backdrop-blur-md shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>{t('hero.cta')}</span>
          <span className="material-symbols-outlined text-lg opacity-80 group-hover:translate-x-1 transition-transform duration-300">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('tendencias')}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer z-10 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 group-hover:text-white transition-colors font-medium">
          {t('hero.discover') || 'Descubrir'}
        </span>
        <span className="material-symbols-outlined text-white text-2xl animate-bounce">
          expand_more
        </span>
      </button>
    </div>
  );
}
