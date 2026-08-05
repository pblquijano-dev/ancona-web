import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import logo from '../assets/images/ancona-header.png';

export default function Header() {
  const { t, i18n } = useTranslation();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['tendencias', 'catalog', 'services', 'about', 'location'];
      const scrollPosition = window.scrollY + 220;

      let current = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  const navItems = [
    { id: 'tendencias', label: t('nav.tendencias') || 'Tendencias' },
    { id: 'catalog', label: t('nav.catalog') },
    { id: 'services', label: t('nav.services') },
    { id: 'about', label: t('nav.about') },
    { id: 'location', label: t('nav.contact') }
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled
      ? 'backdrop-blur-md bg-white/95 py-2.5 shadow-md border-b border-outline-variant/20'
      : 'bg-transparent py-4'
      }`}>
      <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max flex justify-between items-center gap-stack-lg mx-auto">
        {/* Brand Logo */}
        <a href="#" className="relative flex items-center transition-opacity h-14 w-36">
          <img
            src={logo}
            alt="Ancona Joyería"
            className={`h-16 w-auto object-contain transition-all duration-500 ease-in-out ${scrolled ? 'opacity-100' : 'opacity-0 scale-95 pointer-events-none hidden'
              }`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-stack-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-label-caps py-0.5 transition-all duration-300 ${scrolled
                  ? isActive
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                  : isActive
                    ? 'text-white border-b-2 border-white font-bold'
                    : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions (Cart Trigger, Language Switcher) */}
        <div className="hidden md:flex items-center gap-3 md:gap-4 justify-end">
          {/* Shopping Bag Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2 flex items-center justify-center transition-colors rounded-full ${scrolled ? 'text-primary hover:bg-surface-container' : 'text-white hover:bg-white/10'
              }`}
            aria-label={t('cart.title')}
            title={t('cart.title')}
          >
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary-container text-on-secondary-container font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-scaleUp">
                {totalItems}
              </span>
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-label-caps border px-3 py-1.5 rounded transition-colors ${scrolled
              ? 'border-outline-variant hover:border-primary'
              : 'border-white/40 hover:border-white'
              }`}
            title="Switch Language / Cambiar Idioma"
          >
            <span className={
              i18n.language === 'es'
                ? (scrolled ? 'font-bold text-primary' : 'font-bold text-white')
                : (scrolled ? 'text-on-surface-variant' : 'text-white/75')
            }>ES</span>
            <span className={scrolled ? 'text-outline' : 'text-white/50'}>|</span>
            <span className={
              i18n.language === 'en'
                ? (scrolled ? 'font-bold text-primary' : 'font-bold text-white')
                : (scrolled ? 'text-on-surface-variant' : 'text-white/75')
            }>EN</span>
          </button>
        </div>

        {/* Mobile App Bar Actions (Hamburger Toggle) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            className={`material-symbols-outlined p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Cart & Language Switcher inside */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 border-t border-outline-variant/30 mt-4 flex flex-col gap-4 animate-fadeIn px-6 bg-white/95 backdrop-blur-md shadow-xl text-left border-b border-outline-variant/20">
          {/* Mobile Cart & Language Actions Row */}
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="flex items-center gap-2 text-primary font-label-caps text-xs font-bold"
            >
              <div className="relative">
                <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary-container text-on-secondary-container font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                    {totalItems}
                  </span>
                )}
              </div>
              <span>BOLSA DE COMPRAS ({totalItems})</span>
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-label-caps border border-outline-variant px-3 py-1.5 rounded text-xs"
            >
              <span className={i18n.language === 'es' ? 'font-bold text-primary' : 'text-on-surface-variant'}>ES</span>
              <span className="text-outline">|</span>
              <span className={i18n.language === 'en' ? 'font-bold text-primary' : 'text-on-surface-variant'}>EN</span>
            </button>
          </div>

          {/* Nav Items */}
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-label-caps py-2 border-b transition-colors ${isActive
                  ? 'text-primary border-primary font-bold'
                  : 'text-on-surface-variant border-outline-variant/10 hover:text-primary'
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
