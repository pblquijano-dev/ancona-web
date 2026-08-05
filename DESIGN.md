# DESIGN.md - Ancona Joyería Design System

---
name: Luminous Heritage
brand: Ancona Joyería
location: Mérida, Yucatán (Colonia México)
established: 1980
aesthetic: Modern Editorial Minimalism
---

## 1. Brand Identity & Aesthetic Principles

### Brand Personality
**Luminous Heritage** is rooted in quiet luxury, timeless elegance, and understated exclusivity. It balances the rich heritage of fine Mexican jewelry with a contemporary, high-end digital experience. The brand conveys trust, artisanal mastery, and warm personalized service.

### Visual Style: Modern Editorial Minimalism
- **Spatial Breathing Room:** Over-indexed margins (80px desktop, 24px mobile) and generous vertical gaps (120px between sections) create an unhurried, luxury magazine layout.
- **Monochromatic Sophistication:** Built on warm off-whites (`#FAF9F6`), charcoal black (`#202F38`), and metallic gold accents (`#D4AF37` / `#735C00`).
- **Geometric Precision:** 0px to subtle border radius, clean thin linework (1px borders), and sharp typography pairings.

---

## 2. Color System

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| `background` / `surface` | `#FAF9F6` | Main canvas background, warm off-white |
| `surface-container-low` | `#F4F3F1` | Subtle section backgrounds & product cards |
| `surface-container-high` | `#E9E8E5` | Location & contact section contrast background |
| `surface-container-highest` | `#E3E2E0` | Input fields, active toggles & hover states |
| `primary` | `#202F38` | Primary text, titles, navigation links & primary buttons |
| `primary-container` | `#36454F` | Services section background (Deep Charcoal) |
| `on-primary` | `#FFFFFF` | Text on primary dark backgrounds |
| `secondary` | `#735C00` | Gold accent color for section tags & subheadings |
| `secondary-accent` | `#D4AF37` | Luminous gold highlight |
| `secondary-container` | `#FED65B` | Hero button hover accent & notification callouts |
| `on-surface` | `#1A1C1A` | Dark neutral body text |
| `on-surface-variant` | `#43474B` | Secondary body text & descriptions |
| `outline` | `#73777B` | Structural divider lines |
| `outline-variant` | `#C3C7CB` | Subtle input borders & card outlines |

---

## 3. Typography Hierarchy

### Font Families
- **Headline Font (Serif):** `Libre Caslon Text` (Weights: 400, 700, Italic) - Traditional, authoritative, and elegant.
- **Body & Functional Font (Sans-Serif):** `Manrope` (Weights: 300, 400, 600, 800) - Geometric, crisp, and highly readable.

### Type Scale

```css
/* Display Large (Hero Headline Desktop) */
font-family: 'Libre Caslon Text', serif;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.02em;
font-weight: 400;

/* Headline Large (Section Titles Desktop) */
font-family: 'Libre Caslon Text', serif;
font-size: 40px;
line-height: 48px;
font-weight: 400;

/* Headline Large Mobile */
font-family: 'Libre Caslon Text', serif;
font-size: 32px;
line-height: 40px;
font-weight: 400;

/* Headline Medium (Card Titles / Subtitles) */
font-family: 'Libre Caslon Text', serif;
font-size: 28px;
line-height: 36px;
font-weight: 400;

/* Body Large */
font-family: 'Manrope', sans-serif;
font-size: 18px;
line-height: 28px;
font-weight: 400;

/* Body Medium */
font-family: 'Manrope', sans-serif;
font-size: 16px;
line-height: 24px;
font-weight: 400;

/* Label Caps (Buttons, Navigation, Section Tags) */
font-family: 'Manrope', sans-serif;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.1em;
font-weight: 600;
text-transform: uppercase;
```

---

## 4. Spacing & Layout Architecture

- **Max Container Width:** `1440px` centered wrapper
- **Section Gap (`section-gap`):** `120px` vertical rhythm
- **Desktop Edge Margin:** `80px`
- **Mobile Edge Margin:** `24px`
- **Grid Gutter:** `32px` desktop, `16px` mobile
- **Stack Spacing:**
  - Small (`stack-sm`): `8px`
  - Medium (`stack-md`): `16px`
  - Large (`stack-lg`): `32px`

---

## 5. UI Component Specifications

### 1. Navigation Shell (`Header`)
- Fixed top bar with `backdrop-blur-md` and `bg-surface/90`.
- Brand title in uppercase Caslon serif with letter tracking (`tracking-widest`).
- Language selector toggle (`ES | EN`).
- Quick actions: WhatsApp button, Shopping bag icon, Mobile hamburger drawer toggle.

### 2. Hero Section
- Atmospheric full-bleed image with `scale-105` zoom effect and `bg-black/40` subtle overlay.
- Tagline: `EST. 1980 · MÉRIDA`.
- Main Headline: *"Joyas que trascienden generaciones en Mérida"*.
- Call to action: Direct WhatsApp consultation button with gold hover transition.
- Scroll indicator: Bouncing expand-more icon at the bottom.

### 3. Favorites Carousel (`Ancona Favorites`)
- Curated collection cards in `4:5` aspect ratio wrapper (`bg-surface-container-low`).
- Smooth hover zoom (`group-hover:scale-110`) on jewelry images.
- Custom scroll snap container with explicit Prev/Next action buttons.

### 4. Catalog Grid
- Metal category tabs: `Oro` (Gold) vs `Plata` (Silver).
- 4-column responsive grid (Anillos, Cadenas, Aretes, Relojes).
- Overlay cards with dark gradient on hover and "Ver todo" action link.

### 5. Tradition & History (`Nosotros`)
- 2-column editorial layout.
- High-res image of Colonia México boutique.
- Floating quote card from Familia Ancona set in primary charcoal background (`#202F38`).

### 6. Specialized Services (`Servicios`)
- Full dark section (`bg-primary`, `#202F38`) with off-white text (`#FFFFFF`).
- 5 icon cards: Venta (Sales), Sistema de Apartados (Layaway), Reparación (Repair), Limpieza (Cleaning), Diseño a Medida (Custom Design).
- Circular bordered icons with Material Symbols.

### 7. Testimonials (`Experiencias Ancona`)
- 3-column white card grid with quotes in italic Manrope body.
- Verified customer initials and 5 gold stars rating (`★★★★★`).

### 8. Jewelry & Style Guide (`Blog`)
- Educational grid with articles on Mérida weather jewelry care, White Gold vs Platinum, and Engagement ring guide.
- Hover arrow animations (`hover:translate-x-2`).

### 9. Location & Contact (`Visítanos`)
- Store address in Colonia México, Mérida.
- Structured opening hours table.
- Social media icon buttons.
- Styled grayscale map view.

### 10. Footer & Floating FAB
- 4-column footer with brand heritage overview, quick links, newsletter email signup, and copyright.
- Omnipresent WhatsApp FAB button (`#25D366`) fixed at bottom-right corner.
