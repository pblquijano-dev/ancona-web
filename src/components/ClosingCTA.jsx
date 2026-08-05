import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ClosingCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-section-gap bg-secondary-fixed text-primary text-center">
      <div className="px-edge-margin-mobile max-w-4xl mx-auto">
        <h2 className="font-headline text-3xl md:text-headline-lg mb-8">
          {t('closingCta.title')}
        </h2>
        <p className="font-body text-lg md:text-xl mb-12 opacity-90 font-light">
          {t('closingCta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://wa.me/5219990000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-12 py-6 flex items-center justify-center font-label-caps tracking-widest hover:opacity-90 transition-all shadow-xl min-h-[72px]"
          >
            {t('closingCta.primaryBtn')}
          </a>
          <a
            href="#location"
            className="border-2 border-primary text-primary px-12 py-5 font-label-caps tracking-widest hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center min-h-[72px]"
          >
            {t('closingCta.secondaryBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}
