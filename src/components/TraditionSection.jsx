import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalPortal from './modals/ModalPortal';

export default function TraditionSection() {
  const { t } = useTranslation();
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const historyPoints = t('tradition.historyPoints', { returnObjects: true }) || [];

  return (
    <section id="about" className="py-section-gap px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto overflow-hidden reveal-on-scroll">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSw9Far2ujrmxoX_iFotfLLhnnlGrENvZ7aTRkgCLHUg9e7wwI0jetGjKPZFXAChTKwYtDdwbDLjyLUK0n5-QuZD3dGLUR54bEa0ZLETGgDZS4PNEZdQGCiBWlla4KLnL9AcmHx-vt3G8J22yUxqOI8-2q7ef6DdzB9dAdwAT1v3PKDrYy3WpHTnJcVeJzAwlIS9ApUR_m8BW2Zudpxlu1vQ8XHlZPWmi3TtaaL6W780s6FlBKuw8umQHgEa3Qt4DYULA"
            alt="Ancona Joyería Mérida Storefront"
            className="w-full shadow-2xl rounded-sm object-cover"
          />
        </div>

        {/* Right Story & Quote */}
        <div className="text-left">
          <span className="text-label-caps text-secondary mb-6 block font-semibold tracking-[0.2em]">
            {t('tradition.tagline')}
          </span>
          <h2 className="font-headline text-3xl md:text-headline-lg mb-10 leading-tight">
            {t('tradition.title')}
          </h2>
          <div className="space-y-8 font-body text-on-surface-variant text-lg leading-relaxed font-light">
            <p>{t('tradition.p1')}</p>
            <p>{t('tradition.p2')}</p>
          </div>

          {/* Quote Callout Box */}
          <div className="mt-12 p-8 bg-surface-container-high border-l-4 border-primary shadow-sm">
            <p className="font-headline italic text-xl mb-4 text-primary">
              {t('tradition.quote')}
            </p>
            <span className="text-label-caps text-on-surface-variant text-xs">
              {t('tradition.author')}
            </span>
          </div>

          <button
            onClick={() => setIsHistoryModalOpen(true)}
            className="inline-block mt-12 bg-primary text-on-primary px-10 py-5 font-label-caps tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-300 shadow-lg font-bold"
          >
            {t('tradition.cta')}
          </button>
        </div>
      </div>

      {/* Full-Page History & Legacy Modal */}
      {isHistoryModalOpen && (
        <ModalPortal
          isOpen={isHistoryModalOpen}
          onClose={() => setIsHistoryModalOpen(false)}
          type="full-page"
          title={t('tradition.historyTitle') || 'Historia & Legado Ancona Joyería'}
        >
          <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 text-left">
            {/* Hero Image & Narrative */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs text-secondary font-label-caps tracking-widest font-bold block mb-2">
                  {t('tradition.historyTagline') || 'DESDE 1990 EN MÉRIDA, YUCATÁN'}
                </span>
                <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6 font-bold">
                  {t('tradition.historySubtitle')}
                </h2>
                <p className="font-body text-on-surface-variant leading-relaxed text-base font-light mb-6">
                  {t('tradition.historyStory')}
                </p>
                <p className="font-body text-on-surface-variant leading-relaxed text-base font-light">
                  {t('tradition.historyParagraph2')}
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSw9Far2ujrmxoX_iFotfLLhnnlGrENvZ7aTRkgCLHUg9e7wwI0jetGjKPZFXAChTKwYtDdwbDLjyLUK0n5-QuZD3dGLUR54bEa0ZLETGgDZS4PNEZdQGCiBWlla4KLnL9AcmHx-vt3G8J22yUxqOI8-2q7ef6DdzB9dAdwAT1v3PKDrYy3WpHTnJcVeJzAwlIS9ApUR_m8BW2Zudpxlu1vQ8XHlZPWmi3TtaaL6W780s6FlBKuw8umQHgEa3Qt4DYULA"
                  alt="Ancona Boutique Mérida"
                  className="w-full h-80 object-cover shadow-xl rounded-sm"
                />
              </div>
            </div>

            {/* Values Grid */}
            <div className="bg-surface-container-low p-8 md:p-12 rounded-sm border border-outline-variant/20">
              <h3 className="font-headline text-2xl text-primary mb-8 font-bold text-center">
                {t('tradition.pillarsTitle')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {historyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-sm shadow-sm">
                    <span className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                      {idx + 1}
                    </span>
                    <p className="font-body text-sm text-on-surface-variant font-light leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div>
              <h3 className="font-headline text-2xl text-primary mb-6 font-bold">
                {t('tradition.boutiqueTitle')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                  alt="Craftsmanship 1"
                  className="w-full h-64 object-cover rounded-sm shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
                  alt="Craftsmanship 2"
                  className="w-full h-64 object-cover rounded-sm shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1611591475140-0230fe41d06b?auto=format&fit=crop&w=800&q=80"
                  alt="Craftsmanship 3"
                  className="w-full h-64 object-cover rounded-sm shadow-md"
                />
              </div>
            </div>

            {/* CTA Footer */}
            <div className="text-center pt-8 border-t border-outline-variant/20">
              <a
                href="https://wa.me/5219990000000?text=Hola%20Ancona%20Joyer%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20visita%20a%20su%20boutique%20en%20M%C3%A9rida."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-label-caps text-xs tracking-[0.2em] hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md font-bold"
              >
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                <span>{t('tradition.scheduleVisitBtn')}</span>
              </a>
            </div>
          </div>
        </ModalPortal>
      )}
    </section>
  );
}
