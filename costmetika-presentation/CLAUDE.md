# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**COSTMETIKA Brand Presentation** - Professional motion graphics video compositions for the COSTMETIKA luxury beauty brand using Remotion.

**Tech Stack**: Remotion 4.0, React 18.2, TypeScript 5.0, @remotion/transitions

## Commands

```bash
# Development
npm start                    # Start Remotion Studio (opens http://localhost:3000)
npm start -- --port=3001     # Use different port

# Rendering
npm run build -- <COMPOSITION_ID>              # Render specific composition
npm run build -- COSTMETIKA-Pro-V2             # Render main professional video
npm run build -- COSTMETIKA-Pro-V2 --codec=h264 --crf=18 --concurrency=8  # High-quality render

# Available composition IDs:
# - CoverSlide
# - BrandPillarsSlide
# - RevenueSlide
# - COSTMETIKA-BrandVideo
# - COSTMETIKA-Professional
# - COSTMETIKA-Pro-V2 (recommended - high quality)

# Upgrade
npm run upgrade              # Update all Remotion packages
```

## Architecture

### Composition System

All compositions are registered in `src/Root.tsx` via the `RemotionRoot` component. Entry point is `src/index.ts` which calls `registerRoot(RemotionRoot)`.

**Composition Types**:
1. **Individual Slides** (`src/slides/`) - Standalone 5-10 second scenes
2. **Full Videos** (`src/*.tsx`) - Complete 30-second brand videos combining multiple scenes

### Key Compositions

- **ProfessionalV2.tsx** - Primary high-quality video with bone white aesthetic (#F0EAE1), pink accents (#FF5C8A), and professional spring-based animations
- **FinalVideo.tsx** - Original brutalist design with black backgrounds and rotating geometric elements
- **ProfessionalBrandVideo.tsx** - TransitionSeries-based version (experimental, has import issues)

### Brand Design System

**COSTMETIKA Color Palette**:
- Bone White: `#F0EAE1` (primary background)
- Beauty Pink: `#FF5C8A` (accent color)
- Timeless Black: `#000000` (typography/structure)

**Typography**:
- Display: Arial Black, sans-serif (900 weight)
- Body: Arial, sans-serif (400-700 weight)
- Letter spacing: tight for display (-0.05em), wide for taglines (0.15-0.2em)

### Animation Patterns

All professional compositions use physics-based spring animations instead of linear interpolation:

```typescript
// Professional spring config (smooth, no bounce)
spring({
  frame: frame - delay,
  fps: 30,
  from: 0,
  to: 1,
  config: { damping: 200 }
})

// Material Design easing for interpolate
interpolate(frame, [0, 30], [0, 1], {
  easing: Easing.bezier(0.4, 0.0, 0.2, 1)
})
```

**Staggered Reveals**: Use delay offsets for character-by-character or element-by-element animations (typically 3-5 frame delays between elements).

### Scene Timing Standards

For 30-second videos (900 frames @ 30fps):
- Intro/Brand Reveal: 150-180 frames (5-6s)
- Content Scenes: 180-360 frames (6-12s)
- Color/Identity: 150-180 frames (5-6s)
- Final CTA: 150-240 frames (5-8s)

For individual scenes: 120-150 frames each (4-5s)

## Remotion Configuration

`remotion.config.ts` sets global defaults:
- Video format: JPEG frames
- Codec: H.264
- Concurrency: 8 cores
- Overwrite: true (auto-replaces existing renders)

Override via CLI:
```bash
npm run build -- COMPOSITION_ID --codec=h264 --crf=18 --concurrency=8
```

**CRF Quality Levels**:
- 15-18: High quality (larger files, ~2-3MB for 30s)
- 23: Standard quality (default)
- 28: Lower quality (smaller files)

## Output

Rendered videos go to `out/` directory:
- `COSTMETIKA-Brand-Video.mp4` - Original brutalist version
- `COSTMETIKA-Pro-V2.mp4` - Professional bone white edition (recommended)

Videos are gitignored (excluded from version control).

## Common Issues

### @remotion/transitions Import Errors

If using TransitionSeries, import transitions directly from the package root:
```typescript
// ✅ Correct
import { TransitionSeries, fade, slide } from "@remotion/transitions";

// ❌ Wrong
import { fade, slide } from "@remotion/transitions/fade";
import { springTiming } from "@remotion/transitions/timings"; // timings not exported
```

### Port Already in Use

If port 3000 is occupied:
```bash
npm start -- --port=3001
```

Or kill the existing process:
```bash
lsof -ti:3000 | xargs kill -9
```

### Render Performance

For faster renders:
- Increase concurrency (max = CPU core count)
- Reduce CRF value increases file size but may speed up encoding
- Simplify spring animations (higher damping = less computation)

## Animation Best Practices

1. **Use springs for natural motion** - Avoid linear `interpolate` for position/scale
2. **Stagger animations** - Don't animate everything simultaneously (5-10 frame delays)
3. **Professional timing** - 4-6 seconds per major scene, 20-30 frames for text reveals
4. **Easing curves** - Use Material Design bezier (0.4, 0.0, 0.2, 1) for smooth acceleration
5. **Color restraint** - Pink as accent only (10-20% of screen), bone white dominates
6. **Typography scale** - 100-150px for brand names, 30-50px for body text

## Project Context

This project is part of the larger COSTMETIKA brand system located at:
- Brand Strategy: `~/Dev/Costmetika/COSTMETIKA-BRAND-STRATEGY.md`
- Content Strategy: `~/Dev/Costmetika/COSTMETIKA-CONTENT-STRATEGY.md`
- E-commerce Strategy: `~/Dev/Costmetika/COSTMETIKA-ECOMMERCE-STRATEGY.md`
- Hydrogen Storefront: `~/Dev/Costmetika/` (Shopify Hydrogen with React Router 7)

Parent directory CLAUDE.md: `~/Dev/Micro-Branding/CLAUDE.md`
Global user settings: `~/.claude/CLAUDE.md`
