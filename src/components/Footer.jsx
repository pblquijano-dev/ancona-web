import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const linksExplore = t('footer.linksExplore', { returnObjects: true }) || [];
  const linksService = t('footer.linksService', { returnObjects: true }) || [];

  return (
    <footer className="bg-primary text-on-primary pt-20 pb-12 px-edge-margin-mobile md:px-edge-margin-desktop mx-auto text-left">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand Summary */}
        <div>
          <div className="text-headline-md font-headline text-secondary-fixed tracking-[0.2em] uppercase mb-6 font-bold">
            Ancona Joyería
          </div>
          <p className="font-body text-sm text-on-primary/75 mb-8 leading-relaxed font-light max-w-sm">
            {t('footer.summary')}
          </p>
          <p className="text-[10px] tracking-widest font-label-caps opacity-50">
            {t('footer.copyright')}
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-label-caps text-secondary-fixed mb-6 font-bold text-xs tracking-widest">
            {t('footer.explore')}
          </h4>
          <ul className="space-y-3 font-body text-sm">
            {linksExplore.map((link, idx) => (
              <li key={idx}>
                <a href="#catalog" className="text-on-primary/80 hover:text-secondary-fixed transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Links */}
        <div>
          <h4 className="font-label-caps text-secondary-fixed mb-6 font-bold text-xs tracking-widest">
            {t('footer.service')}
          </h4>
          <ul className="space-y-3 font-body text-sm">
            {linksService.map((link, idx) => (
              <li key={idx}>
                <a href="#services" className="text-on-primary/80 hover:text-secondary-fixed transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
