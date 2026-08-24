/**
 * Global Configuration and Constants for Ancona Joyería
 */

export const STORE_CONFIG = {
  name: 'Ancona Joyería',
  phone: '+52 1 999 000 0000',
  whatsappNumber: '5219990000000',
  address: {
    street: 'Calle 31 #107A x 22, Local 1',
    neighborhood: 'Colonia México',
    city: 'Mérida',
    state: 'Yucatán',
    full: 'Calle 31 #107A x 22, Local 1, Colonia México, Mérida, Yucatán'
  },
  social: {
    instagram: 'https://www.instagram.com/anconajoyeria',
    facebook: 'https://www.facebook.com/AnconaJoyeria',
    googleMaps: 'https://maps.app.goo.gl/nacuQbEYjh3h2Dte7'
  }
};

/**
 * Builds a direct WhatsApp chat URL with an optional pre-filled message.
 * @param {string} [message]
 * @returns {string}
 */
export function buildWhatsAppUrl(message = '') {
  const base = `https://wa.me/${STORE_CONFIG.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export default STORE_CONFIG;
