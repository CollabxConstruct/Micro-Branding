# COSTMETIKA Brand Assets

Complete brand asset library for COSTMETIKA - the anti-luxury beauty marketplace.

**Last Updated**: February 9, 2026

---

## 📁 Structure

### **logos/**
Logo files in SVG format:
- `COSTMETIKA-wordmark-dark.svg` - Dark version for light backgrounds
- `COSTMETIKA-wordmark-light.svg` - Light version for dark backgrounds

### **colors/**
Complete color system with swatches and design tokens:
- `COSTMETIKA-Colors.json` - Brand color definitions (JSON)
- `COSTMETIKA-design-tokens.css` - CSS custom properties
- `COSTMETIKA-Color-Palette-Reference.png` - Visual reference
- `COSTMETIKA-Color-Palette-Phone.png` - Mobile wallpaper reference
- **swatches/** - Individual PNG swatches for each brand color:
  - VOID (#000000), NEAR-BLACK (#1A1A1A)
  - BONE (#F5F2EB), BG-WARM (#E8E4DD)
  - BLUSH (#C9908C), BLUSH-GLOW (#E5B5B1)

### **typography/**
Typography specimens and guidelines:
- `COSTMETIKA-Typography-Specimen.png` - Font usage examples

### **imagery/**
Textures and visual assets:
- `COSTMETIKA-grain-overlay.png` - Signature grain texture overlay

### **video-editing/**
Video production assets:
- `COSTMETIKA-Palette.ase` - Adobe Swatch Exchange file
- `COSTMETIKA-Video-Color-Guide.png` - Video color grading reference

### **guides/**
Brand documentation:
- `COSTMETIKA-Brand-Identity-Guide.pdf` - Complete brand identity guidelines

---

## 🎨 Brand Colors

| Color | Hex | RGB | Role |
|-------|-----|-----|------|
| **VOID** | `#000000` | `0, 0, 0` | Primary Dark / Text on Light |
| **NEAR-BLACK** | `#1A1A1A` | `26, 26, 26` | Body Text / Soft Dark |
| **BONE** | `#F5F2EB` | `245, 242, 235` | Primary Light / Backgrounds |
| **BG-WARM** | `#E8E4DD` | `232, 228, 221` | Secondary Background / Warm Base |
| **BLUSH** | `#C9908C` | `201, 144, 140` | Primary Accent / CTA / Highlights |
| **BLUSH-GLOW** | `#E5B5B1` | `229, 181, 177` | Glow / Hover States / Soft Accent |

---

## 📖 Usage

**Importing colors in CSS:**
```css
@import url('./colors/COSTMETIKA-design-tokens.css');

.element {
  background: var(--costmetika-bone);
  color: var(--costmetika-near-black);
  accent-color: var(--costmetika-blush);
}
```

**Importing colors in JavaScript:**
```js
import colors from './colors/COSTMETIKA-Colors.json';

const brandColors = colors.palette;
// Access: brandColors.BLUSH.hex => "#C9908C"
```

---

## 🔗 Related Projects

- **COSTMETIKA Theme**: `~/Dev/COSTMETIKA-theme/` - Shopify 2.0 Liquid theme
- **Costmetika Storefront**: `~/Dev/Costmetika/` - Shopify Hydrogen (Remix)
- **Brand Videos**: `~/Dev/Micro-Branding/costmetika-presentation/` - Remotion video compositions
- **Brand Strategy**: `~/Dev/Micro-Branding/brand-guidelines/` - Strategy documentation
