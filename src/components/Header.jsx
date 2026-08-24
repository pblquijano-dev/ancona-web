import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { scrollToSection, scrollToTop } from '../utils/scroll';
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
    { id: 'catalog', label: t('nav.catalog') || 'Catálogo' },
    { id: 'services', label: t('nav.services') || 'Servicios' },
    { id: 'about', label: t('nav.about') || 'Nosotros' },
    { id: 'location', label: t('nav.contact') || 'Contacto' }
  ];

  return (
    <header className="relative">
      <nav
        aria-label="Navegación principal"
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled
          ? 'backdrop-blur-md bg-white/95 py-2.5 shadow-md border-b border-outline-variant/20'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="px-edge-margin-mobile lg:px-edge-margin-desktop max-w-container-max flex justify-between items-center gap-stack-lg mx-auto">
          <div className="block lg:hidden w-[40px]" />

          {/* Brand Logo */}
          <button
            onClick={scrollToTop}
            className="relative flex items-center transition-opacity h-14 w-36 cursor-pointer"
            aria-label="Ir al inicio de Ancona Joyería"
          >
            <img
              src={logo}
              alt="Ancona Joyería"
              className={`h-16 w-auto object-contain transition-all duration-500 ease-in-out ${scrolled ? 'opacity-100' : 'opacity-0 scale-95 pointer-events-none hidden'
                }`}
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-stack-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-label-caps py-0.5 transition-all duration-300 cursor-pointer ${scrolled
                    ? isActive
                      ? 'text-primary border-b-2 border-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                    : isActive
                      ? 'text-white border-b-2 border-white font-bold'
                      : 'text-white/80 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Actions (Cart Trigger, Language Switcher) */}
          <div className="hidden lg:flex items-center gap-3 lg:gap-4 justify-end">
            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 flex items-center justify-center transition-colors rounded-full cursor-pointer ${scrolled ? 'text-primary hover:bg-surface-container' : 'text-white hover:bg-white/10'
                }`}
              aria-label={`${t('cart.title') || 'Bolsa de Compras'}${totalItems > 0 ? `, ${totalItems} ${t('cart.itemsSelected')}` : ''}`}
              title={t('cart.title') || 'Bolsa de Compras'}
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary-container text-on-secondary-container font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-scaleUp">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-label-caps border px-3 py-1.5 rounded transition-colors cursor-pointer ${scrolled
                ? 'border-outline-variant hover:border-primary'
                : 'border-white/40 hover:border-white'
                }`}
              title="Switch Language / Cambiar Idioma"
              aria-label="Cambiar idioma entre Español e Inglés"
            >
              <span className={
                i18n.language === 'es'
                  ? (scrolled ? 'font-bold text-primary' : 'font-bold text-white')
                  : (scrolled ? 'text-on-surface-variant' : 'text-white/75')
              }>ES</span>
              <span className={scrolled ? 'text-outline' : 'text-white/50'} aria-hidden="true">|</span>
              <span className={
                i18n.language === 'en'
                  ? (scrolled ? 'font-bold text-primary' : 'font-bold text-white')
                  : (scrolled ? 'text-on-surface-variant' : 'text-white/75')
              }>EN</span>
            </button>
          </div>

          {/* Mobile App Bar Actions (Hamburger Toggle) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              className={`material-symbols-outlined p-2 transition-colors cursor-pointer ${scrolled ? 'text-primary' : 'text-white'
                }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Cart & Language Switcher inside */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className={`lg:hidden mt-4 flex flex-col animate-fadeIn px-6 ${scrolled ? '' : 'bg-white/10 backdrop-blur-md rounded-md'}`}
          >
            {/* Nav Items */}
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToSection(item.id);
                  }}
                  className={`text-label-caps py-4 text-center border-b transition-colors cursor-pointer ${scrolled ? '' : 'text-white/90'} ${isActive
                    ? '!font-bold'
                    : 'text-on-surface-variant border-outline-variant/10 hover:text-primary'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
            {/* Mobile Cart & Language Actions Row */}
            <div className="flex items-center justify-center py-4 border-b border-outline-variant/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className={`flex items-center gap-2 ${scrolled ? 'text-primary' : 'text-white/90'} font-label-caps text-xs font-bold cursor-pointer`}
              >
                <div className="relative">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">shopping_bag</span>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary-container text-on-secondary-container font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-label-caps">{t('cart.title') || 'Bolsa de Compras'}</span>
              </button>
            </div>
            <div className="flex items-center justify-center py-4 border-b border-outline-variant/20">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1 text-label-caps border px-3 py-1.5 rounded transition-colors cursor-pointer ${scrolled
                  ? 'border-outline-variant hover:border-primary'
                  : 'border-white/40 hover:border-white'
                  }`}
                title="Switch Language / Cambiar Idioma"
                aria-label="Cambiar idioma entre Español e Inglés"
              >
                <span className={
                  i18n.language === 'es'
                    ? (scrolled ? 'font-bold text-primary' : 'font-bold text-white')
                    : (scrolled ? 'text-on-surface-variant' : 'text-white/75')
                }>ES</span>
                <span className={scrolled ? 'text-outline' : 'text-white/50'} aria-hidden="true">|</span>
                <span className={
                  i18n.language === 'en'
                    ? (scrolled ? 'font-bold text-primary' : 'font-bold text-white')
                    : (scrolled ? 'text-on-surface-variant' : 'text-white/75')
                }>EN</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
