import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

/**
 * ModalPortal handles rendering modals at the root document level (document.body),
 * locking body scroll while open, listening for ESC key, managing focus trap & restoration,
 * and providing 4 standard layouts:
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
  const modalRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  // Handle body scroll lock & focus restoration
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      // Focus the modal container on open
      const timer = setTimeout(() => {
        if (modalRef.current) {
          const focusable = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            focusable[0].focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        if (previouslyFocusedElement.current && typeof previouslyFocusedElement.current.focus === 'function') {
          previouslyFocusedElement.current.focus();
        }
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Handle ESC key and focus trapping (Tab navigation)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Informative Modal Content Layout
  if (type === 'informative') {
    return ReactDOM.createPortal(
      <div
        className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label={title || t('modal.informativeTitle') || 'Información'}
      >
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={onClose}
          aria-hidden="true"
        />

        <div
          ref={modalRef}
          tabIndex={-1}
          className="relative bg-white max-w-md w-full rounded-sm shadow-2xl p-6 md:p-8 animate-scaleUp text-left z-10 border border-outline-variant/30 outline-none"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-outline hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label={t('modal.close') || 'Cerrar modal'}
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
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
              className="px-5 py-2.5 rounded-sm border border-outline-variant text-primary hover:bg-surface-container text-xs font-label-caps tracking-wider transition-colors font-semibold cursor-pointer"
            >
              {effectiveCancelText}
            </button>
            <button
              onClick={() => {
                if (onConfirm) onConfirm();
                onClose();
              }}
              className="px-6 py-2.5 rounded-sm bg-primary text-white hover:bg-secondary-container hover:text-on-secondary-container text-xs font-label-caps tracking-wider transition-all font-bold shadow-sm cursor-pointer"
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
      <div
        ref={modalRef}
        tabIndex={-1}
        className="fixed inset-0 z-50 bg-surface overflow-y-auto animate-fadeIn text-left outline-none"
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Ancona Joyería'}
      >
        {/* Dark Luxury Toolbar matching Sidebar Header */}
        <div className="sticky top-0 z-50 bg-primary text-white border-b border-white/10 pl-12 pr-6 py-4 flex items-center justify-between shadow-md">
          <div className="w-[32px]" />
          <div className="flex items-center gap-3">
            <h2 className="font-headline text-2xl sm:text-3xl text-white tracking-widest leading-tight font-normal">
              {title || 'Ancona Joyería'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-xs font-label-caps tracking-wider font-bold shadow-sm cursor-pointer"
            aria-label={t('modal.close') || 'Cerrar vista'}
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">close</span>
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
      <div
        className="fixed inset-0 z-50 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={title || t('cart.title') || 'Panel lateral'}
      >
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={onClose}
          aria-hidden="true"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div
            ref={modalRef}
            tabIndex={-1}
            className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-slideInRight outline-none"
          >
            {children}
          </div>
        </div>
      </div>,
      document.body
    );
  }

  // Default 'normal' Modal Layout (Centered Dialog)
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Detalle'}
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-white max-w-3xl w-full max-h-[90vh] rounded-sm shadow-2xl overflow-y-auto animate-scaleUp z-10 border border-outline-variant/30 text-left outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors shadow-md cursor-pointer"
          aria-label={t('modal.close') || 'Cerrar modal'}
        >
          <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}
