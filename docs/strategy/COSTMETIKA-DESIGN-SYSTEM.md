# COSTMETIKA Design System

> A beauty & elegance design language for luxury cosmetics e-commerce

## 🎨 Brand Identity

### Brand Values
- **Elegance**: Sophisticated and refined aesthetics
- **Quality**: Premium feel in every interaction
- **Inclusivity**: Beauty for everyone
- **Innovation**: Modern approach to classic beauty

### Visual Language
The COSTMETIKA design system embodies luxury beauty through:
- Soft, feminine color palettes with bold accents
- Generous white space for breathing room
- Smooth animations and transitions
- High-quality imagery with elegant overlays
- Refined typography hierarchy

---

## 🌈 Color System

### Primary Colors (Brand Pink)
Used for CTAs, links, and brand moments.

```css
primary-50:  #FFF5F7  /* Lightest tint - backgrounds */
primary-500: #FF5C8A  /* Main brand color */
primary-700: #C9184A  /* Hover states */
primary-900: #800F2F  /* Dark accent */
```

**Usage:**
- Primary buttons and CTAs
- Active states
- Brand highlights
- Sale badges and promotions

### Secondary Colors (Neutral Grays)
For text, borders, and UI elements.

```css
secondary-50:  #F8F9FA  /* Light backgrounds */
secondary-700: #495057  /* Body text */
secondary-900: #212529  /* Headings */
```

### Accent Colors
Luxury touches for special moments.

```css
accent-gold:      #D4AF37  /* Premium indicators */
accent-rose-gold: #B76E79  /* Elegant highlights */
accent-pearl:     #F0EAE1  /* Soft backgrounds */
```

**Usage:**
- VIP badges
- Premium product indicators
- Gift wrapping options
- Luxury collections

### Semantic Colors
```css
success: #10B981  /* Order confirmation, stock status */
warning: #F59E0B  /* Low stock, important notices */
error:   #EF4444  /* Form errors, out of stock */
info:    #3B82F6  /* Tips, information callouts */
```

---

## 📝 Typography

### Font Families

**Display Font - Playfair Display**
- Usage: Hero headings, luxury product names
- Weights: 400, 600, 700, 800
- Character: Elegant, serif, high-fashion

**Heading Font - Montserrat**
- Usage: Section headings, navigation, buttons
- Weights: 300, 500, 600, 700
- Character: Modern, geometric, clean

**Body Font - Inter**
- Usage: Body text, descriptions, forms
- Weights: 300, 400, 500, 600
- Character: Readable, versatile, professional

### Type Scale

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| xs   | 12px | 16px | Metadata, captions |
| sm   | 14px | 20px | Small text, labels |
| base | 16px | 24px | Body text |
| lg   | 18px | 28px | Large body, intro |
| xl   | 20px | 28px | Subheadings |
| 2xl  | 24px | 32px | Small headings |
| 3xl  | 30px | 36px | Section headings |
| 4xl  | 36px | 40px | Page headings |
| 5xl  | 48px | 1 | Large headings |
| 6xl  | 60px | 1 | Hero headings |
| 7xl  | 72px | 1 | Display text |

### Typography Examples

```html
<!-- Hero Display -->
<h1 class="font-display text-6xl md:text-7xl font-bold tracking-tight text-gradient">
  Discover Your Beauty
</h1>

<!-- Section Heading -->
<h2 class="font-heading text-4xl font-semibold text-brand-secondary-900">
  New Arrivals
</h2>

<!-- Body Text -->
<p class="font-body text-base leading-relaxed text-brand-secondary-700">
  Discover our curated collection of premium beauty products...
</p>
```

---

## 📦 Component Library

### Buttons

**Primary Button**
```html
<button class="btn-primary">
  Add to Cart
</button>
```

**Secondary Button**
```html
<button class="btn-secondary">
  View Details
</button>
```

**Outline Button**
```html
<button class="btn-outline">
  Add to Wishlist
</button>
```

**Sizes**
```html
<button class="btn-primary btn-sm">Small</button>
<button class="btn-primary">Default</button>
<button class="btn-primary btn-lg">Large</button>
```

### Product Cards

```html
<div class="card-product">
  <div class="product-image-wrapper">
    <img src="product.jpg" alt="Product Name" />
    <div class="product-overlay">
      <button class="btn-primary">Quick View</button>
    </div>
    <span class="badge-new absolute top-4 left-4">New</span>
  </div>
  <div class="p-6">
    <span class="text-sm text-brand-secondary-600">Category</span>
    <h3 class="font-heading text-xl font-semibold mt-2">Product Name</h3>
    <div class="flex items-center justify-between mt-4">
      <span class="text-2xl font-bold text-brand-primary-600">$49.99</span>
      <button class="btn-primary btn-sm">Add to Cart</button>
    </div>
  </div>
</div>
```

### Badges

```html
<!-- Sale Badge -->
<span class="badge-sale">50% Off</span>

<!-- New Product -->
<span class="badge-new">New Arrival</span>

<!-- Premium -->
<span class="badge bg-accent-gold text-white">Premium</span>
```

### Form Inputs

```html
<div class="space-y-2">
  <label class="text-sm font-medium text-brand-secondary-700">
    Email Address
  </label>
  <input
    type="email"
    class="input"
    placeholder="you@example.com"
  />
</div>
```

---

## ✨ Animations & Interactions

### Animation Principles
1. **Subtle & Smooth**: Avoid jarring movements
2. **Purposeful**: Every animation has meaning
3. **Performance**: 60fps, GPU-accelerated
4. **Responsive**: Works on all devices

### Standard Durations
- **Fast**: 150ms - Hover states, tooltips
- **Base**: 300ms - Most transitions
- **Slow**: 500ms - Page transitions, modals

### Common Animations

**Fade In**
```html
<div class="animate-fade-in">Content</div>
```

**Slide Up**
```html
<div class="animate-slide-up">Content</div>
```

**Scale In**
```html
<div class="animate-scale-in">Content</div>
```

**Hover Effects**
```css
.product-card {
  @apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
}
```

### Loading States

**Shimmer Effect**
```html
<div class="shimmer h-64 rounded-lg"></div>
```

---

## 📐 Spacing & Layout

### Spacing Scale
Based on 0.25rem (4px) units:

```
0  = 0
1  = 4px
2  = 8px
3  = 12px
4  = 16px
6  = 24px
8  = 32px
12 = 48px
16 = 64px
24 = 96px
```

### Grid System
- Mobile: Single column
- Tablet: 2 columns (768px+)
- Desktop: 3-4 columns (1024px+)
- Wide: 4-6 columns (1280px+)

### Container Widths
```css
max-width: 1280px (7xl)
padding: 1rem mobile, 1.5rem tablet, 2rem desktop
```

---

## 🖼️ Image Guidelines

### Product Images
- **Aspect Ratio**: 3:4 (portrait)
- **Resolution**: Minimum 1200x1600px
- **Format**: WebP with JPG fallback
- **Background**: Pure white (#FFFFFF) or lifestyle

### Hero Images
- **Aspect Ratio**: 16:9
- **Resolution**: Minimum 1920x1080px
- **Format**: WebP
- **Overlay**: Optional gradient overlay

### Image Optimization
```html
<img
  src="product-small.webp"
  srcset="product-medium.webp 768w, product-large.webp 1280w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Product Name"
  loading="lazy"
  class="aspect-product object-cover"
/>
```

---

## ♿ Accessibility

### Color Contrast
- Text on white: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: Clear focus states

### Focus States
All interactive elements have visible focus indicators:
```css
*:focus-visible {
  outline: 2px solid theme('colors.brand.primary.500');
  outline-offset: 2px;
}
```

### Screen Readers
- Alt text for all images
- ARIA labels for icon buttons
- Semantic HTML structure
- Skip navigation links

---

## 📱 Responsive Design

### Breakpoints
```javascript
sm:  640px   // Mobile landscape
md:  768px   // Tablet
lg:  1024px  // Desktop
xl:  1280px  // Wide desktop
2xl: 1536px  // Ultra-wide
```

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens:

```html
<!-- Mobile: Stack, Desktop: Side-by-side -->
<div class="flex flex-col lg:flex-row gap-6">
  <div class="w-full lg:w-1/2">Content</div>
  <div class="w-full lg:w-1/2">Content</div>
</div>
```

---

## 🎯 Best Practices

### DO ✅
- Use design tokens consistently
- Maintain generous white space
- Optimize images (WebP format)
- Test on real devices
- Follow accessibility guidelines
- Use semantic HTML
- Implement smooth transitions

### DON'T ❌
- Mix font families unnecessarily
- Use low-contrast color combinations
- Ignore mobile experience
- Overuse animations
- Skip alt text on images
- Use fixed pixel widths
- Sacrifice performance for aesthetics

---

## 📚 Resources

### Design Files
- Design tokens: `costmetika-design-tokens.json`
- Tailwind config: `tailwind.config.costmetika.js`
- Global styles: `design-system-globals.css`

### Brand Assets
- Logo files: SVG, PNG variants
- Color palettes: Figma, Sketch files
- Typography: Google Fonts links
- Icons: Custom icon set

### Development
- Storybook for component preview
- Design tokens in code
- Automated accessibility testing
- Performance monitoring

---

## 🔄 Updates & Versioning

**Current Version**: 1.0.0

### Version History
- **1.0.0** (2026-02) - Initial design system release
  - Core color palette
  - Typography system
  - Component library
  - Animation guidelines

### Maintenance
Design system is maintained by the COSTMETIKA design team.
For questions or contributions, contact: design@costmetika.com

---

**Last Updated**: February 2026
**Maintained by**: COSTMETIKA Design Team
