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
                    className="w-14 h-14 bg-primary flex items-center justify-center rounded-full text-white hover:bg-secondary transition-all shadow-md"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/AnconaJoyeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary flex items-center justify-center rounded-full text-white hover:bg-secondary transition-all shadow-md"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
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
                  <p className="text-xs text-on-surface-variant mb-4">Calle 31 #107A x 22, Local 1, Colonia México, Mérida</p>
                  <a
                    href="https://maps.app.goo.gl/nacuQbEYjh3h2Dte7"
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
