import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/ancona-hero.png';

export default function LoadingScreen() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 bg-primary text-white flex flex-col items-center justify-center p-6 animate-fadeIn">
      {/* Brand Logo */}
      <div className="mb-8 relative flex items-center justify-center">
        <img
          src={logo}
          alt="Ancona Joyería"
          className="h-20 w-auto object-contain animate-pulse"
        />
      </div>

      {/* Gold Accent Progress Spinner */}
      <div className="w-10 h-10 border-2 border-secondary-fixed/20 border-t-secondary-fixed rounded-full animate-spin mb-4" />

      {/* Tagline */}
      <span className="text-label-caps text-secondary-fixed text-[11px] tracking-[0.3em] font-semibold uppercase">
        {t('loading.text')}
      </span>
    </div>
  );
}
