import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import { buildWhatsAppUrl } from '../config/constants';
import ModalPortal from './modals/ModalPortal';

export default function CartDrawer() {
  const { t } = useTranslation();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const formattedTotal = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(totalPrice);

  const generateWhatsAppMessage = () => {
    let text = `${t('cart.waPrompt')}\n\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* (x${item.quantity}) - ${item.price}\n`;
    });
    text += `\n*${t('cart.waTotal')}* ${formattedTotal}\n\n${t('cart.waEnding')}`;
    return text;
  };

  const whatsappUrl = buildWhatsAppUrl(generateWhatsAppMessage());

  return (
    <ModalPortal
      isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      type="side"
      title={t('cart.title') || 'Bolsa de Compras'}
    >
      {/* Header */}
      <div className="p-6 bg-primary text-white flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-secondary-fixed" aria-hidden="true">
            shopping_bag
          </span>
          <div>
            <h2 className="font-headline text-xl text-white font-bold">
              {t('cart.title') || 'Bolsa de Compras'}
            </h2>
            <span className="text-xs text-white/70 font-label-caps">
              {totalItems} {totalItems === 1 ? t('cart.itemSelected') : t('cart.itemsSelected')}
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsCartOpen(false)}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label={t('modal.close') || 'Cerrar bolsa de compras'}
        >
          <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
        </button>
      </div>

      {/* Cart Items List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-12">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 text-outline">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">shopping_bag</span>
            </div>
            <h3 className="font-headline text-lg text-primary mb-2">
              {t('cart.emptyTitle') || 'Tu bolsa está vacía'}
            </h3>
            <p className="font-body text-xs text-on-surface-variant max-w-xs font-light mb-6">
              {t('cart.emptySubtitle') ||
                'Explora nuestro catálogo exclusivo y añade tus piezas favoritas.'}
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-primary hover:bg-primary/90 text-white text-xs font-label-caps px-6 py-3 tracking-widest transition-colors font-bold cursor-pointer"
            >
              {t('cart.exploreBtn') || 'EXPLORAR CATÁLOGO'}
            </button>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-3 bg-surface-container-low border border-outline-variant/20 rounded-sm relative group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-sm bg-white flex-shrink-0"
              />

              <div className="flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-headline text-sm text-primary font-bold line-clamp-1 pr-6">
                      {item.name}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-outline hover:text-error transition-colors p-0.5 cursor-pointer"
                      title="Eliminar pieza"
                      aria-label={`Eliminar ${item.name} de la bolsa`}
                    >
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">delete</span>
                    </button>
                  </div>
                  <span className="text-[10px] text-secondary font-label-caps font-semibold">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="font-headline text-sm text-primary font-bold">
                    {item.price}
                  </span>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-outline-variant/40 bg-white rounded">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-0.5 text-on-surface-variant hover:bg-surface-container transition-colors text-xs font-bold cursor-pointer"
                      aria-label="Disminuir cantidad"
                    >
                      -
                    </button>
                    <span className="px-2.5 py-0.5 text-xs font-bold text-primary min-w-[24px] text-center" aria-label={`Cantidad actual: ${item.quantity}`}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-0.5 text-on-surface-variant hover:bg-surface-container transition-colors text-xs font-bold cursor-pointer"
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer & Actions */}
      {cart.length > 0 && (
        <div className="p-6 bg-surface-container-low border-t border-outline-variant/20 space-y-4 flex-shrink-0">
          <div className="flex justify-between items-center text-xs font-label-caps">
            <span className="text-on-surface-variant">
              {t('cart.subtotal') || 'Total Estimado'}
            </span>
            <span className="font-headline text-xl text-primary font-bold">
              {formattedTotal}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary hover:bg-secondary-container text-white hover:text-on-secondary-container py-4 text-center font-label-caps text-xs tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 shadow-md font-bold"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
            <span>{t('cart.checkoutWa') || 'FINALIZAR PEDIDO POR WHATSAPP'}</span>
          </a>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={clearCart}
              className="text-[11px] text-outline hover:text-error transition-colors underline font-label-caps cursor-pointer"
            >
              {t('cart.clearBtn') || 'Vaciar bolsa'}
            </button>
            <span className="text-[10px] text-on-surface-variant/70 italic">
              {t('cart.personalizedNote')}
            </span>
          </div>
        </div>
      )}
    </ModalPortal>
  );
}
