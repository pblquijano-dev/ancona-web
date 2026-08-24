import { useTranslation } from 'react-i18next';
import logo from '../assets/images/ancona-hero.png';

export default function LoadingScreen() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 bg-primary text-white flex flex-col items-center justify-center p-6 animate-fadeIn">
      {/* Brand Logo */}
      <div className="mb-3 relative flex items-center justify-center">
        <img
          src={logo}
          alt="Ancona Joyería"
          className="h-20 w-auto object-contain"
        />
      </div>
      <span className="text-label-caps text-secondary-fixed text-[11px] tracking-[0.3em] font-semibold uppercase animate-pulse">
        A real piece of jewelry
      </span>
    </div>
  );
}
