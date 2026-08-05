import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        brand: "ANCONA JOYERÍA",
        catalog: "Catálogo",
        tendencias: "Tendencias",
        services: "Servicios",
        about: "Nosotros",
        contact: "Contacto",
      },
      loading: {
        text: "Cargando Experiencia Ancona Joyería..."
      },
      search: {
        placeholder: "Buscar joyas por nombre o descripción...",
        clear: "Limpiar búsqueda"
      },
      modal: {
        close: "CERRAR",
        confirm: "Aceptar",
        cancel: "Cancelar"
      },
      productModal: {
        youSave: "Ahorras",
        shareTag: "Compartir joya en redes sociales:",
        facebook: "Facebook",
        instagram: "Instagram",
        copiedToast: "¡Detalles copiados al portapapeles! Listo para compartir en Instagram.",
        shareCopy: "¡Descubre esta joya de Ancona Joyería!: {{name}} ({{price}}) - {{url}}",
        consultWa: "Consultar por WhatsApp",
        waConsultPrompt: "Hola Ancona Joyería, me gustaría consultar la pieza \"{{name}}\" ({{price}}).",
        basePrice: "Precio Base",
        offBadge: "OFF"
      },
      hero: {
        tagline: "EST. 1990",
        title: "Joyas que trascienden generaciones en Mérida",
        subtitle: "Tu joyería de confianza en Colonia México. Descubre piezas únicas diseñadas para celebrar tus momentos más importantes.",
        cta: "Hablar con un asesor",
        discover: "Descubrir"
      },
      cart: {
        title: "Bolsa de Compras",
        itemsCount: "piezas seleccionadas",
        itemSelected: "pieza seleccionada",
        itemsSelected: "piezas seleccionadas",
        emptyTitle: "Tu bolsa de compras está vacía",
        emptySubtitle: "Explora nuestro catálogo exclusivo y añade tus piezas favoritas para solicitarlas por WhatsApp.",
        exploreBtn: "EXPLORAR CATÁLOGO",
        subtotal: "Total Estimado",
        checkoutWa: "FINALIZAR PEDIDO POR WHATSAPP",
        clearBtn: "Vaciar bolsa",
        personalizedNote: "Atención personalizada 1 a 1 en Mérida",
        waPrompt: "Hola Ancona Joyería, me gustaría realizar el pedido de las siguientes piezas en mi bolsa de compras:",
        waTotal: "Total estimado:",
        waEnding: "Quedo a la espera de sus datos para proceder con la confirmación y pago. ¡Muchas gracias!"
      },
      tendencias: {
        tagline: "COLECCIÓN DESTACADA & TENDENCIAS",
        title: "Tendencias Ancona",
        subtitle: "Galería de piezas seleccionadas. Haz clic en cualquier imagen para ver su descripción o agrégala directamente a tu bolsa.",
        addToCart: "Añadir a la bolsa",
        viewDetails: "Ver detalles",
        seeMore: "VER MÁS TENDENCIAS",
        seeLess: "VER MENOS TENDENCIAS"
      },
      catalog: {
        tagline: "CATÁLOGO DE ALTA JOYERÍA",
        title: "Explora nuestro Catálogo",
        subtitle: "Haz clic en cualquiera de las 7 categorías para desplegar los modelos a la venta.",
        viewCollection: "Ver Colección",
        modalTitle: "Colección de",
        modalSubtitle: "Piezas disponibles en nuestra boutique en Colonia México o con envío asegurado a todo México.",
        addToCartBtn: "AÑADIR A LA BOLSA",
        subCategoryLabel: "Subcategoría:",
        itemsFound: "Piezas encontradas",
        customBasePrice: "Piezas con Precio Base",
        modelAvailable: "modelo disponible",
        modelsAvailable: "modelos disponibles",
        searchPlaceholder: "Buscar en {{category}} por nombre o descripción...",
        subcategories: {
          all: "Todos",
          boda: "Boda",
          compromiso: "Compromiso",
          otros: "Otros"
        },
        categories: {
          rings: "Anillos",
          earrings: "Aretes",
          chains: "Cadenas",
          pulseras: "Pulsos",
          dijes: "Dijes",
          churumbelas: "Churumbelas",
          custom: "Personalizado"
        }
      },
      tradition: {
        tagline: "NUESTRA HISTORIA",
        title: "La tradición de la elegancia en el corazón de Yucatán.",
        p1: "En Ancona Joyería, entendemos que cada pieza cuenta una historia. Desde nuestra fundación en Mérida, nos hemos dedicado a ofrecer solo la más alta calidad en metales preciosos y gemas.",
        p2: "Ubicados en la emblemática Colonia México, somos el punto de referencia para quienes buscan confianza, peritaje local y un servicio que trata a cada cliente como parte de nuestra propia familia.",
        quote: "\"Nuestra pasión es crear símbolos que perduran por siempre.\"",
        author: "FAMILIA ANCONA",
        cta: "CONOCE MÁS SOBRE NOSOTROS",
        historyTitle: "Historia & Legado Ancona Joyería",
        historyTagline: "DESDE 1990 EN MÉRIDA, YUCATÁN",
        historySubtitle: "Más de Tres Décadas Forjando Momentos",
        historyStory: "Fundada por la familia Ancona a principios de los años 90 en el corazón de la Colonia México en Mérida, nuestra boutique nació con una misión clara: elevar la artesanía de la joyería fina combinando el peritaje gemológico con una atención cercana, ética y cálida.",
        historyParagraph2: "Cada diseño en nuestro taller combina técnicas de orfebrería ancestral italiana con modelado 3D de alta precisión, garantizando piezas únicas que pasan de generación en generación.",
        pillarsTitle: "Los Pilares de Nuestra Casa Joyera",
        boutiqueTitle: "Nuestra Boutique en Colonia México",
        scheduleVisitBtn: "AGENDAR VISITA A BOUTIQUE",
        historyPoints: [
          "Más de 30 años vistiendo los momentos más importantes de las familias yucatecas.",
          "Taller propio con maestros orfebres y gemólogos certificados.",
          "Materiales de procedencia ética: Oro de 14k y 18k, Plata de Ley 925 y gemas naturales sin tratamientos indebidos.",
          "Peritaje local y mantenimiento continuo para cada joya adquirida en nuestra casa."
        ]
      },
      services: {
        tagline: "SERVICIOS PROFESIONALES DE ALTA JOYERÍA",
        title: "Servicios de Especialidad",
        subtitle: "Servicios profesionales prestados por maestros joyeros en nuestra boutique de Colonia México.",
        btnSolicitar: "Solicitar",
        btnMas: "Más",
        modalReadMoreTitle: "Detalles del Servicio",
        closeModal: "Cerrar",
        processTag: "PROCESO PASO A PASO",
        guaranteeTag: "GARANTÍA & TIEMPO",
        boutiqueNote: "Atención directa en nuestra boutique en Colonia México, Mérida.",
        requestBtnWa: "SOLICITAR SERVICIO POR WHATSAPP",
        specialtyTag: "SERVICIOS DE ESPECIALIDAD",
        estimatedTime: "TIEMPO ESTIMADO",
        localGuarantee: "GARANTÍA LOCAL",
        immediateTime: "Atención inmediata",
        writtenGuarantee: "Garantía por escrito",
        list: [
          {
            id: "serv-venta",
            icon: "shopping_cart",
            title: "Asesoría",
            desc: "Exclusiva curaduría de piezas en oro y plata de ley.",
            waPrompt: "Hola Ancona Joyería, me interesa recibir asesoría personalizada para la compra de una joya.",
            details: {
              summary: "Acompañamiento personalizado 1 a 1 para seleccionar la joya perfecta para tus aniversarios, bodas o momentos de vida.",
              process: [
                "Entrevista personalizada en boutique o vía digital para entender tus gustos y presupuesto.",
                "Presentación de opciones curadas con certificación de autenticidad.",
                "Ajuste de medida sin costo adicional y entrega en empaque de regalo de lujo."
              ],
              timeframe: "Entrega inmediata o en 48 hrs con ajuste de talla.",
              guarantee: "Garantía de por vida en la autenticidad del oro y plata."
            }
          },
          {
            id: "serv-apartados",
            icon: "layers",
            title: "Apartado",
            desc: "Facilidades para que obtengas la joya de tus sueños.",
            waPrompt: "Hola Ancona Joyería, quisiera consultar las condiciones y plazos del sistema de apartados.",
            details: {
              summary: "Asegura la pieza que te enamoró congelando su precio sin intereses con pagos cómodos a tu ritmo.",
              process: [
                "Aparta cualquier pieza con solo el 20% del valor total.",
                "Plazo flexible de hasta 3 a 6 meses para liquidar.",
                "Guarda segura en nuestra bóveda hasta la fecha de tu entrega."
              ],
              timeframe: "Plazos de 30 a 180 días según la colección.",
              guarantee: "Congelamiento estricto de precio en metales finos."
            }
          },
          {
            id: "serv-reparacion",
            icon: "build",
            title: "Reparación",
            desc: "Especialistas en restauración de alta joyería local.",
            waPrompt: "Hola Ancona Joyería, me gustaría solicitar una cotización de reparación/restauración de una joya.",
            details: {
              summary: "Restauramos anillos quebrados, soldadura de cadenas, cambio de broches y engaste de piedras perdidas con tecnología de precisión.",
              process: [
                "Diagnóstico en microscopio por nuestro maestro joyero en Colonia México.",
                "Cotización previa detallada sin compromiso.",
                "Soldadura láser, nivelación y prueba de resistencia de broches."
              ],
              timeframe: "2 a 5 días hábiles según la complejidad del trabajo.",
              guarantee: "6 meses de garantía sobre el trabajo realizado."
            }
          },
          {
            id: "serv-limpieza",
            icon: "flare",
            title: "Mantenimiento",
            desc: "Mantenimiento profesional para un brillo impecable.",
            waPrompt: "Hola Ancona Joyería, me interesa agendar una limpieza y pulido profesional para mis joyas.",
            details: {
              summary: "Devuelve a tus joyas el esplendor y brillo del primer día mediante ultrasonido, pulido a espejo y baño de rodio.",
              process: [
                "Lavado por cavitación ultrasónica para retirar impurezas profundas.",
                "Pulido profesional de micro-rayaduras superficiales.",
                "Baño protector de rodio brillante para piezas de oro blanco o plata."
              ],
              timeframe: "Mismo día (expedito de 1 a 3 horas).",
              guarantee: "Brillo garantizado y revisión gratuita de garras."
            }
          },
          {
            id: "serv-amedida",
            icon: "diamond",
            title: "A Medida",
            desc: "Diseño de anillos únicos para momentos inolvidables.",
            waPrompt: "Hola Ancona Joyería, me gustaría cotizar un diseño de joyería hecho a la medida desde cero.",
            details: {
              summary: "Creación desde cero de anillos de compromiso, alianzas de boda y piezas únicas modeladas en 3D.",
              process: [
                "Bocetaje inicial y modelado digital 3D hiperrealista.",
                "Selección de gemas sueltas (diamantes, esmeraldas, rubíes).",
                "Vaciado en metal fino, engaste artesanal y grabado personalizado interno."
              ],
              timeframe: "10 a 15 días hábiles desde la aprobación del render.",
              guarantee: "Certificado de autenticidad e inspección gemológica."
            }
          }
        ]
      },
      testimonials: {
        tagline: "EXPERIENCIAS ANCONA",
        title: "Lo que nuestros clientes dicen",
        pause: "Pausar",
        play: "Reproducir",
        prev: "Anterior",
        next: "Siguiente"
      },
      favorites: {
        tagline: "PIEZAS DESTACADAS",
        title: "Favoritos de la Colección",
        quickView: "Vista rápida",
        viewDetails: "Ver detalles",
        consultWa: "Consultar por WhatsApp",
        waConsultPrompt: "Hola Ancona Joyería, me gustaría consultar la disponibilidad y detalles de la pieza \"{{name}}\" ({{price}})."
      },
      closingCta: {
        title: "¿Buscas algo verdaderamente especial?",
        subtitle: "Visítanos en nuestra boutique en Mérida y recibe asesoría personalizada de nuestros expertos joyeros.",
        primaryBtn: "AGENDAR CITA POR WHATSAPP",
        secondaryBtn: "VER UBICACIÓN"
      },
      location: {
        title: "Visítanos",
        addressTag: "DIRECCIÓN",
        addressLine1: "Calle 20 x 15, Colonia México,",
        addressLine2: "Mérida, Yucatán, México.",
        hoursTag: "HORARIOS",
        weekdays: "Lunes a Viernes:",
        weekdaysTime: "10:00 - 19:00",
        saturday: "Sábado:",
        saturdayTime: "10:00 - 14:00",
        sunday: "Domingo:",
        sundayTime: "Cerrado",
        socialTag: "SÍGUENOS EN REDES"
      },
      footer: {
        summary: "Excelencia en joyería artesanal y confianza local desde 1990 en el corazón de Mérida.",
        copyright: "© 2024 ANCONA JOYERÍA. YUCATÁN, MÉXICO.",
        explore: "EXPLORA",
        service: "SERVICIO",
        linksExplore: ["Colecciones Anillos", "Tendencias", "Nuestra Historia"],
        linksService: ["Mantenimiento", "Diseño a Medida", "Contacto Directo"]
      }
    }
  },
  en: {
    translation: {
      nav: {
        brand: "ANCONA JEWELRY",
        catalog: "Catalog",
        tendencias: "Trends",
        services: "Services",
        about: "About Us",
        contact: "Contact",
      },
      loading: {
        text: "Loading Ancona Jewelry Experience..."
      },
      search: {
        placeholder: "Search jewelry by name or description...",
        clear: "Clear search"
      },
      modal: {
        close: "CLOSE",
        confirm: "Confirm",
        cancel: "Cancel"
      },
      productModal: {
        youSave: "You save",
        shareTag: "Share jewelry on social media:",
        facebook: "Facebook",
        instagram: "Instagram",
        copiedToast: "Details copied to clipboard! Ready to share on Instagram.",
        shareCopy: "Discover this piece from Ancona Jewelry!: {{name}} ({{price}}) - {{url}}",
        consultWa: "Inquire on WhatsApp",
        waConsultPrompt: "Hello Ancona Jewelry, I would like to inquire about the piece \"{{name}}\" ({{price}}).",
        basePrice: "Base Price",
        offBadge: "OFF"
      },
      hero: {
        tagline: "EST. 1990",
        title: "Jewelry that transcends generations in Mérida",
        subtitle: "Your trusted jewelry store in Colonia México. Discover unique fine pieces designed to celebrate your life's milestone moments.",
        cta: "Speak with an advisor",
        discover: "Discover"
      },
      cart: {
        title: "Shopping Bag",
        itemsCount: "selected items",
        itemSelected: "selected item",
        itemsSelected: "selected items",
        emptyTitle: "Your shopping bag is empty",
        emptySubtitle: "Explore our catalog and add your favorite pieces to order via WhatsApp.",
        exploreBtn: "EXPLORE CATALOG",
        subtotal: "Estimated Total",
        checkoutWa: "FINALIZE ORDER ON WHATSAPP",
        clearBtn: "Clear bag",
        personalizedNote: "1-on-1 personalized service in Mérida",
        waPrompt: "Hello Ancona Jewelry, I would like to place an order for the following items in my shopping bag:",
        waTotal: "Estimated total:",
        waEnding: "I look forward to hearing from you to proceed with confirmation and payment. Thank you very much!"
      },
      tendencias: {
        tagline: "CURATED TRENDS & SPECIAL EDITION",
        title: "Ancona Trends",
        subtitle: "Gallery of featured pieces. Click on any photo to view description or add directly to your bag.",
        addToCart: "Add to bag",
        viewDetails: "View details",
        seeMore: "VIEW MORE TRENDS",
        seeLess: "VIEW FEWER TRENDS"
      },
      catalog: {
        tagline: "FINE JEWELRY CATALOG",
        title: "Explore our Catalog",
        subtitle: "Click on any of our 7 categories to view the models for sale.",
        viewCollection: "View Collection",
        modalTitle: "Collection of",
        modalSubtitle: "Models available in our Colonia México boutique or nationwide insured delivery.",
        addToCartBtn: "ADD TO BAG",
        subCategoryLabel: "Subcategory:",
        itemsFound: "Items found",
        customBasePrice: "Customizable Base Price",
        modelAvailable: "model available",
        modelsAvailable: "models available",
        searchPlaceholder: "Search in {{category}} by name or description...",
        subcategories: {
          all: "All",
          boda: "Wedding",
          compromiso: "Engagement",
          otros: "Others"
        },
        categories: {
          rings: "Rings",
          earrings: "Earrings",
          chains: "Chains",
          pulseras: "Bracelets",
          dijes: "Pendants",
          churumbelas: "Eternity Bands",
          custom: "Customized"
        }
      },
      tradition: {
        tagline: "OUR STORY",
        title: "The tradition of elegance in the heart of Yucatán.",
        p1: "At Ancona Jewelry, we understand that every piece tells a story. Since our founding in Mérida, we have dedicated ourselves to offering fine gold and silver craftsmanship.",
        p2: "Located in iconic Colonia México, we are your local benchmark for trust, quality, and warm family service.",
        quote: "\"Our passion is creating symbols that last forever.\"",
        author: "ANCONA FAMILY",
        cta: "LEARN MORE ABOUT US",
        historyTitle: "Ancona Jewelry History & Legacy",
        historyTagline: "SINCE 1990 IN MÉRIDA, YUCATÁN",
        historySubtitle: "Over Three Decades Crafting Moments",
        historyStory: "Founded by the Ancona family in the early 1990s in Colonia México, Mérida, our boutique was born with a mission to elevate fine jewelry craftsmanship.",
        historyParagraph2: "Each design in our workshop combines classic goldsmith techniques with 3D precision modeling, guaranteeing unique heirloom pieces.",
        pillarsTitle: "The Pillars of Our Jewelry House",
        boutiqueTitle: "Our Boutique in Colonia México",
        scheduleVisitBtn: "SCHEDULE BOUTIQUE VISIT",
        historyPoints: [
          "Over 30 years celebrating life's most meaningful moments.",
          "In-house workshop with certified master goldsmiths.",
          "Ethically sourced materials: 14k & 18k Gold, 925 Silver, natural gemstones.",
          "Local valuation & lifelong maintenance."
        ]
      },
      services: {
        tagline: "FINE JEWELRY PROFESSIONAL SERVICES",
        title: "Specialties & Services",
        subtitle: "Professional fine jewelry services by master jewelers in Colonia México.",
        btnSolicitar: "Request",
        btnMas: "More",
        modalReadMoreTitle: "Service Details",
        closeModal: "Close",
        processTag: "STEP BY STEP PROCESS",
        guaranteeTag: "GUARANTEE & TIMEFRAME",
        boutiqueNote: "Direct service at our boutique in Colonia México, Mérida.",
        requestBtnWa: "REQUEST SERVICE VIA WHATSAPP",
        specialtyTag: "SPECIALTY SERVICES",
        estimatedTime: "ESTIMATED TIMEFRAME",
        localGuarantee: "LOCAL GUARANTEE",
        immediateTime: "Immediate service",
        writtenGuarantee: "Written guarantee",
        list: [
          {
            id: "serv-venta",
            icon: "shopping_cart",
            title: "Consultation",
            desc: "Exclusive curation of gold and sterling silver jewelry.",
            waPrompt: "Hello Ancona Jewelry, I would like personal advice for purchasing a piece of jewelry.",
            details: {
              summary: "Personalized 1-on-1 consultation to choose the ideal piece for anniversaries, weddings, or celebrations.",
              process: [
                "Personal consultation in boutique or online to match your taste & budget.",
                "Curated presentation with authenticity certification.",
                "Complimentary size adjustment and luxury gift packaging."
              ],
              timeframe: "Immediate delivery or within 48 hours for resizing.",
              guarantee: "Lifetime authenticity guarantee on gold and silver."
            }
          },
          {
            id: "serv-apartados",
            icon: "layers",
            title: "Layaway",
            desc: "Flexible payment plans to secure your dream jewelry.",
            waPrompt: "Hello Ancona Jewelry, I would like to inquire about the layaway terms.",
            details: {
              summary: "Lock in the price of your piece interest-free with flexible monthly payments.",
              process: [
                "Reserve any piece with a 20% down payment.",
                "Flexible 3 to 6 month layaway schedule.",
                "Secure vault storage until final payment."
              ],
              timeframe: "30 to 180 day terms depending on the collection.",
              guarantee: "Strict price lock guarantee."
            }
          },
          {
            id: "serv-reparacion",
            icon: "build",
            title: "Repair",
            desc: "Expert restoration of high jewelry.",
            waPrompt: "Hello Ancona Jewelry, I would like to request a quote for jewelry repair/restoration.",
            details: {
              summary: "Restoring broken rings, soldering chains, stone replacement, and prong tightening with precision technology.",
              process: [
                "Microscopic diagnosis by our master jeweler in Colonia México.",
                "Detailed quote before work commences.",
                "Laser welding, polishing, and stress testing."
              ],
              timeframe: "2 to 5 business days depending on complexity.",
              guarantee: "6-month guarantee on repair work."
            }
          },
          {
            id: "serv-limpieza",
            icon: "flare",
            title: "Maintenance",
            desc: "Professional maintenance for an impeccable shine.",
            waPrompt: "Hello Ancona Jewelry, I would like to schedule a professional cleaning and polishing for my jewelry.",
            details: {
              summary: "Restore original shine via ultrasonic bath, mirror polishing, and rhodium plating.",
              process: [
                "Ultrasonic cavitation wash to remove embedded particles.",
                "Professional micro-scratch polishing.",
                "Rhodium protective bath for white gold and silver."
              ],
              timeframe: "Same day (1 to 3 hours express).",
              guarantee: "Shine guaranteed & free prong safety check."
            }
          },
          {
            id: "serv-amedida",
            icon: "diamond",
            title: "Bespoke",
            desc: "Bespoke ring and jewelry design for unforgettable moments.",
            waPrompt: "Hello Ancona Jewelry, I would like to get a quote for a custom bespoke jewelry piece.",
            details: {
              summary: "Custom creation of engagement rings and bespoke anniversary pieces modelled in 3D.",
              process: [
                "Initial sketch and hyperrealistic 3D digital render.",
                "Selection of loose gemstones (diamonds, emeralds, sapphires).",
                "Casting in fine metal, hand setting, and inner engraving."
              ],
              timeframe: "10 to 15 business days after render approval.",
              guarantee: "Authenticity certificate & gemological report."
            }
          }
        ]
      },
      testimonials: {
        tagline: "ANCONA EXPERIENCES",
        title: "What our clients say",
        pause: "Pause",
        play: "Play",
        prev: "Previous",
        next: "Next"
      },
      favorites: {
        tagline: "FEATURED PIECES",
        title: "Collection Favorites",
        quickView: "Quick View",
        viewDetails: "View Details",
        consultWa: "Inquire on WhatsApp",
        waConsultPrompt: "Hello Ancona Jewelry, I would like to inquire about availability and details for \"{{name}}\" ({{price}})."
      },
      closingCta: {
        title: "Looking for something truly special?",
        subtitle: "Visit our boutique in Mérida for personalized advice from expert jewelers.",
        primaryBtn: "SCHEDULE APPOINTMENT ON WHATSAPP",
        secondaryBtn: "VIEW LOCATION"
      },
      location: {
        title: "Visit Us",
        addressTag: "ADDRESS",
        addressLine1: "Calle 20 x 15, Colonia México,",
        addressLine2: "Mérida, Yucatán, Mexico.",
        hoursTag: "HOURS",
        weekdays: "Monday to Friday:",
        weekdaysTime: "10:00 - 19:00",
        saturday: "Saturday:",
        saturdayTime: "10:00 - 14:00",
        sunday: "Sunday:",
        sundayTime: "Closed",
        socialTag: "FOLLOW US"
      },
      footer: {
        summary: "Master craftsmanship in fine jewelry and local trust since 1990 in the heart of Mérida.",
        copyright: "© 2024 ANCONA JEWELRY. YUCATÁN, MEXICO.",
        explore: "EXPLORE",
        service: "SERVICES",
        linksExplore: ["Ring Collections", "Trends", "Our Story"],
        linksService: ["Maintenance", "Custom Design", "Direct Contact"]
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
