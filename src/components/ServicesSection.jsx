import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalPortal from './modals/ModalPortal';
import { buildWhatsAppUrl } from '../config/constants';

export default function ServicesSection() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  const services = t('services.list', { returnObjects: true }) || [];

  return (
    <section id="services" className="py-section-gap bg-primary text-on-primary reveal-on-scroll">
      <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto text-center">
        {/* Header Left Aligned with Tagline, Title and Subtitle */}
        <div className="mb-8">
          <span className="text-label-caps text-secondary-fixed mb-1 block tracking-[0.25em] font-semibold">
            {t('services.tagline')}
          </span>
          <h2 className="font-headline text-3xl md:text-headline-lg mb-1 text-white">
            {t('services.title')}
          </h2>
          <p className="font-body text-on-primary/75 text-sm md:text-base font-light max-w-lg !leading-[1.2] block mx-auto">
            {t('services.subtitle') ||
              'Servicios profesionales prestados por maestros joyeros en nuestra boutique de Colonia México.'}
          </p>
        </div>

        {/* Clean Original Service Column Layout (No Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 text-center">
          {services.map((service, index) => {
            const waUrl = buildWhatsAppUrl(service.waPrompt);
            return (
              <div key={service.id || index} className="flex flex-col items-center group sm:last:col-span-2 md:last:col-span-1 lg:last:col-span-1">
                {/* Circular Icon */}
                <div className="w-20 h-20 rounded-full border-2 border-secondary-fixed/30 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-5xl text-secondary-fixed" aria-hidden="true">
                    {service.icon || 'star'}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="font-headline text-xl text-white font-bold">
                  {service.title}
                </h3>
                <p className="font-body text-on-primary/70 text-sm leading-[1.2] max-w-xs font-light mb-3">
                  {service.desc}
                </p>

                {/* Horizontal Links: Solicitar & Más */}
                <div className="flex items-center gap-4 text-xs font-label-caps tracking-wider border-t border-white/15 pt-4 w-full justify-center">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-fixed hover:text-white font-bold transition-colors inline-flex items-center gap-1"
                  >
                    <span>{t('services.btnSolicitar') || 'Solicitar'}</span>
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">open_in_new</span>
                  </a>

                  <span className="text-white/30" aria-hidden="true">|</span>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-white/80 hover:text-secondary-fixed transition-colors font-semibold inline-flex items-center gap-1"
                  >
                    <span>{t('services.btnMas') || 'Más'}</span>
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Info Modal via ModalPortal */}
      {selectedService && (
        <ModalPortal
          isOpen={Boolean(selectedService)}
          onClose={() => setSelectedService(null)}
          type="normal"
          title={selectedService.title}
        >
          {/* Modal Header */}
          <div className="p-6 md:p-8 bg-surface-container-low border-b border-outline-variant/20 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary text-secondary-fixed flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  {selectedService.icon}
                </span>
              </div>
              <div>
                <span className="text-xs text-secondary font-label-caps tracking-widest font-bold block mb-1">
                  {t('services.specialtyTag')}
                </span>
                <h3 className="font-headline text-2xl md:text-3xl text-primary font-bold">
                  {selectedService.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Modal Reading Body */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[65vh] space-y-6">
            <p className="font-headline text-lg text-primary leading-relaxed border-l-4 border-secondary pl-4 py-1 italic">
              {selectedService.details?.summary || selectedService.desc}
            </p>

            {selectedService.details?.process && (
              <div>
                <h4 className="text-xs font-label-caps tracking-widest text-secondary font-bold mb-3 uppercase">
                  {t('services.processTag') || 'PROCESO PASO A PASO'}
                </h4>
                <ul className="space-y-3">
                  {selectedService.details.process.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-body text-on-surface font-light">
                      <span className="w-6 h-6 rounded-full bg-surface-container-high text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface-container-low p-4 rounded-sm border border-outline-variant/20 text-xs">
              <div>
                <span className="font-label-caps font-bold text-secondary block mb-1">
                  {t('services.estimatedTime')}
                </span>
                <p className="text-on-surface-variant font-light">
                  {selectedService.details?.timeframe || 'Atención inmediata'}
                </p>
              </div>
              <div>
                <span className="font-label-caps font-bold text-secondary block mb-1">
                  {t('services.localGuarantee')}
                </span>
                <p className="text-on-surface-variant font-light">
                  {selectedService.details?.guarantee || 'Garantía por escrito'}
                </p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 bg-white border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-on-surface-variant font-light">
              {t('services.boutiqueNote')}
            </span>

            <a
              href={buildWhatsAppUrl(selectedService.waPrompt)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary hover:bg-secondary-container text-white hover:text-on-secondary-container py-3 px-6 text-center font-label-caps text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md font-bold"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
              <span>{t('services.requestBtnWa')}</span>
            </a>
          </div>
        </ModalPortal>
      )}
    </section>
  );
}
