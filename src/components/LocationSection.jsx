import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LocationSection() {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-section-gap bg-surface-container-high">
      <div className="px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch bg-white shadow-xl overflow-hidden rounded-xl border border-outline-variant/20">
          {/* Address Box */}
          <div className="p-8 md:p-20 flex flex-col justify-center">
            <h2 className="font-headline text-3xl md:text-headline-lg mb-10">{t('location.title')}</h2>

            <div className="space-y-10 font-body">
              <div>
                <span className="text-label-caps text-secondary mb-3 block">{t('location.addressTag')}</span>
                <p className="font-body text-primary text-xl leading-snug">
                  {t('location.addressLine1')}<br />
                  {t('location.addressLine2')}
                </p>
              </div>

              <div>
                <span className="text-label-caps text-secondary mb-4 block">{t('location.hoursTag')}</span>
                <ul className="space-y-3 font-body text-on-surface-variant text-sm">
                  <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>{t('location.weekdays')}</span>
                    <span className="font-bold text-primary">{t('location.weekdaysTime')}</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                    <span>{t('location.saturday')}</span>
                    <span className="font-bold text-primary">{t('location.saturdayTime')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('location.sunday')}</span>
                    <span className="opacity-50">{t('location.sundayTime')}</span>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-label-caps text-secondary mb-6 block">{t('location.socialTag')}</span>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/anconajoyeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary flex items-center justify-center rounded-full text-white hover:bg-secondary transition-all"
                    aria-label="Instagram"
                  >
                    <span className="material-symbols-outlined scale-125">camera</span>
                  </a>
                  <a
                    href="https://wa.me/5219990000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary flex items-center justify-center rounded-full text-white hover:bg-secondary transition-all"
                    aria-label="WhatsApp"
                  >
                    <span className="material-symbols-outlined scale-125">qr_code_2</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grayscale Map Container */}
          <div className="min-h-[450px] relative overflow-hidden bg-surface-container-highest">
            <div
              className="w-full h-full bg-cover bg-center grayscale transition-all hover:grayscale-0 duration-1000"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAb7Fldp0IXBJtgJH2Agy_6I7IxADgi8q2BsDwsYgSmeqDe6Jl2n8dZwuGxwa7gpMkAi12X9ABJEKKBCkusV8wK1Bbl7UWjJM-HyTQ9M4nEv_bATVzS7qMPcSkTnsT4huGDQhErg__PLTy7vHyq2nKc7x6rax8PAzWhEhYC8MwHQOhPXQKxpZh1HKoIOqOR7iA-bs2ECr1NFdhRXrcbVJw0PECLrbC7JhHODh9JTYjALXm6IN-V7z7pxA')`
              }}
            >
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center p-6">
                <div className="bg-white/95 backdrop-blur-md p-6 shadow-2xl text-center max-w-xs border border-secondary/30 rounded-md">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2 block animate-bounce">
                    location_on
                  </span>
                  <h4 className="font-headline text-lg text-primary mb-1">Ancona Joyería</h4>
                  <p className="text-xs text-on-surface-variant mb-4">Calle 20 x 15, Colonia México, Mérida</p>
                  <a
                    href="https://maps.google.com/?q=Colonia+Mexico+Merida+Yucatan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-5 py-2.5 text-label-caps text-[10px] hover:bg-secondary transition-colors"
                  >
                    Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
