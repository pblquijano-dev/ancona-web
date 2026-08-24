import ringTrend from '../assets/images/photos/ring-trend.webp';
import ringsPhoto from '../assets/images/photos/rings.webp';
import necklacesPhoto from '../assets/images/photos/necklaces.webp';
import slavesPhoto from '../assets/images/photos/slaves.webp';
import chainsPhoto from '../assets/images/photos/high-angle-gold-chains-leaves.webp';
import braceletPhoto from '../assets/images/photos/vertical-closeup-shot-female-wearing-golden-bracelet.webp';

// Nuevas imagenes generadas
import emeraldPendant from '../assets/images/products/emerald-pendant.webp';
import pearlEarrings from '../assets/images/products/pearl-earrings.webp';
import weddingBand from '../assets/images/products/wedding-band.webp';
import haloRing from '../assets/images/products/halo-ring.webp';
import signetRing from '../assets/images/products/signet-ring.webp';
import hoopEarrings from '../assets/images/products/hoop-earrings.webp';
import diamondStuds from '../assets/images/products/diamond-studs.webp';
import crystalDropEarrings from '../assets/images/products/crystal-drop-earrings.webp';
import diamondChoker from '../assets/images/products/diamond-choker.webp';
import snakeChain from '../assets/images/products/snake-chain.webp';
import tennisBracelet from '../assets/images/products/tennis-bracelet.webp';
import crossPendant from '../assets/images/products/cross-pendant.webp';
import customRing from '../assets/images/products/custom-ring.webp';

export const productsData = {
  tendencias: [
    {
      id: "tend-1",
      name: "Anillo Solitario Diamante Real",
      detail: "Alta Joyería · 1.2 ct",
      price: "$24,225 MXN",
      originalPrice: "$28,500 MXN",
      discountPercent: 15,
      hasDiscount: true,
      desc: "Anillo de compromiso clásico en oro blanco de 18k con diamante certificado corte brillante y engaste de 4 uñas.",
      image: ringTrend,
      images: [ringTrend]
    },
    {
      id: "tend-2",
      name: "Gargantilla Pavé Minimalista",
      detail: "Edición Limitada · Circonias AAAA",
      price: "$3,780 MXN",
      originalPrice: "$4,200 MXN",
      discountPercent: 10,
      hasDiscount: true,
      desc: "Diseño contemporáneo en acabado espejo con incrustaciones micro-pavé que atrapan la luz en cada ángulo.",
      image: necklacesPhoto,
      images: [necklacesPhoto]
    },
    {
      id: "tend-3",
      name: "Churumbela Eternidad Diamantes",
      detail: "Alta Joyería · Oro Blanco 14k",
      price: "$18,500 MXN",
      originalPrice: "$21,800 MXN",
      discountPercent: 15,
      hasDiscount: true,
      desc: "Churumbela engastada con hilera continua de diamantes corte brillante en oro blanco de 14k, símbolo de un amor eterno.",
      image: ringsPhoto,
      images: [ringsPhoto]
    },
    {
      id: "tend-4",
      name: "Semanario Italiano Texturizado",
      detail: "Técnica Tradicional · 7 Brazaletes",
      price: "$15,120 MXN",
      originalPrice: "$18,900 MXN",
      discountPercent: 20,
      hasDiscount: true,
      desc: "Juego de 7 pulseras semanario con grabado diamantado hecho a mano. Elegancia italiana clásica.",
      image: slavesPhoto,
      images: [slavesPhoto]
    },
    {
      id: "tend-5",
      name: "Dije Esmeralda Colombiana",
      detail: "Gema Natural · Halo Diamantes",
      price: "$34,200 MXN",
      originalPrice: null,
      discountPercent: null,
      hasDiscount: false,
      desc: "Dije con esmeralda natural colombiana de intenso verde profundo en marco de finos diamantes de corte radiante.",
      image: emeraldPendant,
      images: [emeraldPendant]
    },
    {
      id: "tend-6",
      name: "Aretes Perla del Sur Colgante",
      detail: "Perla de Cultivo 9mm",
      price: "$10,710 MXN",
      originalPrice: "$12,600 MXN",
      discountPercent: 15,
      hasDiscount: true,
      desc: "Aretes finos de diseño atemporal con lustre tornasolado supremo y broche de alta seguridad.",
      image: pearlEarrings,
      images: [pearlEarrings]
    }
  ],
  catalog: {
    rings: [
      {
        id: "r-1",
        subcategory: "compromiso",
        name: "Anillo Solitario Real",
        metal: "Oro Blanco 18K",
        price: "$21,165 MXN",
        originalPrice: "$24,900 MXN",
        discountPercent: 15,
        hasDiscount: true,
        image: ringsPhoto,
        images: [ringsPhoto],
        desc: "Diamante corte princesa de 0.80 ct en montadura de 4 uñas."
      },
      {
        id: "r-2",
        subcategory: "boda",
        name: "Argolla Matrimonial Confort",
        metal: "Oro Amarillo 14K",
        price: "$12,500 MXN",
        originalPrice: null,
        discountPercent: null,
        hasDiscount: false,
        image: weddingBand,
        images: [weddingBand],
        desc: "Argolla pulida anatómica de máximo confort interior."
      },
      {
        id: "r-3",
        subcategory: "otros",
        name: "Semanario Maya Tallado",
        metal: "Oro Amarillo 14K",
        price: "$14,850 MXN",
        originalPrice: "$16,500 MXN",
        discountPercent: 10,
        hasDiscount: true,
        image: ringsPhoto,
        images: [ringsPhoto],
        desc: "Siete bandas delgadas grabadas con técnica satinada artesanal."
      },
      {
        id: "r-4",
        subcategory: "compromiso",
        name: "Solitario Halo Diamantes",
        metal: "Oro Rosa 14K",
        price: "$21,800 MXN",
        originalPrice: null,
        discountPercent: null,
        hasDiscount: false,
        image: haloRing,
        images: [haloRing],
        desc: "Gema central enmarcada en halo brillante de circonias premium."
      },
      {
        id: "r-5",
        subcategory: "boda",
        name: "Argolla Dúo Eslabón",
        metal: "Plata Ley 925",
        price: "$3,060 MXN",
        originalPrice: "$3,400 MXN",
        discountPercent: 10,
        hasDiscount: true,
        image: weddingBand,
        images: [weddingBand],
        desc: "Plata rodiada con carril pulido central para matrimonio."
      },
      {
        id: "r-6",
        subcategory: "otros",
        name: "Anillo Sello Ancona",
        metal: "Oro Amarillo 18K",
        price: "$29,000 MXN",
        originalPrice: null,
        discountPercent: null,
        hasDiscount: false,
        image: signetRing,
        images: [signetRing],
        desc: "Sello masculino o femenino listo para grabado personalizado."
      }
    ],
    earrings: [
      {
        id: "e-1",
        name: "Arracadas Italianas Tubulares",
        metal: "Oro Amarillo 14K",
        price: "$7,565 MXN",
        originalPrice: "$8,900 MXN",
        discountPercent: 15,
        hasDiscount: true,
        image: hoopEarrings,
        images: [hoopEarrings],
        desc: "Arracadas ligeras de 25mm con broche de bisagra seguro."
      },
      {
        id: "e-2",
        name: "Broqueles Diamante Solitario",
        metal: "Oro Blanco 18K",
        price: "$17,500 MXN",
        originalPrice: null,
        discountPercent: null,
        hasDiscount: false,
        image: diamondStuds,
        images: [diamondStuds],
        desc: "Broqueles clásicos con poste de rosca y diamantes auténticos."
      },
      {
        id: "e-3",
        name: "Aretes Colgantes Gota Cristal",
        metal: "Plata Ley 925",
        price: "$2,340 MXN",
        originalPrice: "$2,600 MXN",
        discountPercent: 10,
        hasDiscount: true,
        image: crystalDropEarrings,
        images: [crystalDropEarrings],
        desc: "Diseño con caída suave y movimiento natural."
      }
    ],
    chains: [
      {
        id: "c-1",
        name: "Cadena Eslabón Salomón",
        metal: "Oro Amarillo 18K",
        price: "$18,190 MXN",
        originalPrice: "$21,400 MXN",
        discountPercent: 15,
        hasDiscount: true,
        image: chainsPhoto,
        images: [chainsPhoto],
        desc: "Tejido Salomón italiano de 50 cm en oro macizo."
      },
      {
        id: "c-2",
        name: "Gargantilla Diamantada",
        metal: "Oro Blanco 14K",
        price: "$15,600 MXN",
        originalPrice: null,
        discountPercent: null,
        hasDiscount: false,
        image: diamondChoker,
        images: [diamondChoker],
        desc: "Gargantilla ultra-brillante con reflejo prismático."
      },
      {
        id: "c-3",
        name: "Cadena Serpiente Fina",
        metal: "Plata Ley 925",
        price: "$2,880 MXN",
        originalPrice: "$3,200 MXN",
        discountPercent: 10,
        hasDiscount: true,
        image: snakeChain,
        images: [snakeChain],
        desc: "Tejido plano suave de alto brillo para dije o uso directo."
      }
    ],
    pulseras: [
      {
        id: "p-1",
        name: "Pulsera Barbada Maciza",
        metal: "Oro Amarillo 14K",
        price: "$19,800 MXN",
        originalPrice: null,
        discountPercent: null,
        hasDiscount: false,
        image: braceletPhoto,
        images: [braceletPhoto],
        desc: "Eslabones corpulentos pulidos con broche de caja."
      },
      {
        id: "p-2",
        name: "Pulsera Tenis Zirconias",
        metal: "Plata Ley 925",
        price: "$3,825 MXN",
        originalPrice: "$4,500 MXN",
        discountPercent: 15,
        hasDiscount: true,
        image: tennisBracelet,
        images: [tennisBracelet],
        desc: "Hilera continua de circonias montadas en 4 uñas."
      }
    ],
    dijes: [
      {
        id: "d-1",
        name: "Dije Cruz Clásica Diamantada",
        metal: "Oro Amarillo 14K",
        price: "$5,780 MXN",
        originalPrice: "$6,800 MXN",
        discountPercent: 15,
        hasDiscount: true,
        image: crossPendant,
        images: [crossPendant],
        desc: "Diseño tradicional con destellos diamantados en bordes."
      }
    ],
    custom: [
      {
        id: "cust-1",
        name: "Anillo de Compromiso a la Medida",
        metal: "Oro 14k / 18k a elección",
        price: "Desde $18,000 MXN",
        originalPrice: null,
        discountPercent: null,
        hasDiscount: false,
        isBasePrice: true,
        image: customRing,
        images: [customRing],
        desc: "Diseñamos en 3D el anillo de tus sueños a partir de tu presupuesto e idea. Incluye grabado de regalo."
      }
    ]
  }
};

export default productsData;
