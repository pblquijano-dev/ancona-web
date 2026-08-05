import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

/**
 * ModalPortal handles rendering modals at the root document level (document.body),
 * locking body scroll while open, listening for ESC key, and providing 4 standard layouts:
 * - 'normal': Centered card max-w-3xl for products and details
 * - 'informative': Compact card max-w-md with Title, Message, Cancel & Confirm buttons
 * - 'full-page': Immersive fullscreen view (100vw, 100vh) for Catalog & History
 * - 'side': Right slide-over drawer for Shopping Bag / Cart
 */
export default function ModalPortal({
  isOpen,
  onClose,
  type = 'normal',
  title,
  message,
  onConfirm,
  confirmText,
  cancelText,
  children,
}) {
  const { t } = useTranslation();
  const effectiveConfirmText = confirmText || t('modal.confirm');
  const effectiveCancelText = cancelText || t('modal.cancel');
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Informative Modal Content Layout
  if (type === 'informative') {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={onClose}
        />

        <div className="relative bg-white max-w-md w-full rounded-sm shadow-2xl p-6 md:p-8 animate-scaleUp text-left z-10 border border-outline-variant/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-outline hover:text-primary transition-colors p-1"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          {title && (
            <h3 className="font-headline text-2xl md:text-3xl text-primary font-bold mb-3 pr-6">
              {title}
            </h3>
          )}

          <div className="font-body text-sm text-on-surface-variant font-light leading-relaxed mb-6">
            {message || children}
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-outline-variant/20">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-sm border border-outline-variant text-primary hover:bg-surface-container text-xs font-label-caps tracking-wider transition-colors font-semibold"
            >
              {effectiveCancelText}
            </button>
            <button
              onClick={() => {
                if (onConfirm) onConfirm();
                onClose();
              }}
              className="px-6 py-2.5 rounded-sm bg-primary text-white hover:bg-secondary-container hover:text-on-secondary-container text-xs font-label-caps tracking-wider transition-all font-bold shadow-sm"
            >
              {effectiveConfirmText}
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  }

  // Full-Page Modal Layout (Sidebar/Dark Bar Toolbar Style)
  if (type === 'full-page') {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 bg-surface overflow-y-auto animate-fadeIn text-left">
        {/* Dark Luxury Toolbar matching Sidebar Header */}
        <div className="sticky top-0 z-50 bg-primary text-white border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary-fixed text-2xl">
              auto_awesome
            </span>
            <span className="font-headline text-xl text-white tracking-widest font-bold uppercase">
              {title || 'Ancona Joyería'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs font-label-caps tracking-wider font-bold shadow-sm"
          >
            <span>{t('modal.close')}</span>
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Full View Content Wrapper */}
        <div className="min-h-[calc(100vh-65px)]">
          {children}
        </div>
      </div>,
      document.body
    );
  }

  // Side Drawer Modal Layout
  if (type === 'side') {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={onClose}
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slideInRight">
            {children}
          </div>
        </div>
      </div>,
      document.body
    );
  }

  // Default 'normal' Modal Layout (Centered Dialog)
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
      />

      <div className="relative bg-white max-w-3xl w-full max-h-[90vh] rounded-sm shadow-2xl overflow-y-auto animate-scaleUp z-10 border border-outline-variant/30 text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors shadow-md"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}
