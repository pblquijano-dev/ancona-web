import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  const { t } = useTranslation();

  const linksExplore = [
    { label: (t('footer.linksExplore', { returnObjects: true }) || [])[0] || 'Colecciones Anillos', target: 'catalog' },
    { label: (t('footer.linksExplore', { returnObjects: true }) || [])[1] || 'Tendencias', target: 'tendencias' },
    { label: (t('footer.linksExplore', { returnObjects: true }) || [])[2] || 'Nuestra Historia', target: 'about' }
  ];

  const linksService = [
    { label: (t('footer.linksService', { returnObjects: true }) || [])[0] || 'Mantenimiento', target: 'services' },
    { label: (t('footer.linksService', { returnObjects: true }) || [])[1] || 'Diseño a Medida', target: 'services' },
    { label: (t('footer.linksService', { returnObjects: true }) || [])[2] || 'Contacto Directo', target: 'location' }
  ];

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
            {linksExplore.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(item.target)}
                  className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-left cursor-pointer"
                >
                  {item.label}
                </button>
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
            {linksService.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(item.target)}
                  className="text-on-primary/80 hover:text-secondary-fixed transition-colors text-left cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
