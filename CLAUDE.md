# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Micro-Branding is a **brand development workspace** for COSTMETIKA. It contains brand assets, strategy documents, and a Remotion video project.

This is NOT a single-app codebase — it's a workspace with one code project inside `costmetika-presentation/`.

## Structure

```
Micro-Branding/
├── assets/                    # COSTMETIKA brand asset library (shared across all projects)
│   ├── colors/                # Color palette PNGs, JSON tokens, design-tokens.css, swatches
│   ├── fonts/                 # Display, pixel/bitmap, sans-serif, serif, specialty fonts
│   ├── guides/                # COSTMETIKA-Brand-Identity-Guide.pdf
│   ├── logos/                 # Logo files (11 variants)
│   ├── imagery/               # Brand imagery
│   ├── typography/            # Typography specimens
│   └── video-editing/         # Video editing assets
├── brand-guidelines/          # Brand guideline documents
├── campaigns/                 # Campaign materials
├── creative-briefs/           # Creative brief documents
├── research/                  # Market/brand research
├── presentations/             # Presentation files
├── templates/                 # Document templates
├── archive/                   # Archived materials
├── docs/                      # Documentation
└── costmetika-presentation/   # Remotion video project (see its own CLAUDE.md)
```

## Brand Assets (`assets/`)

This directory is the canonical source of COSTMETIKA brand assets, referenced by other projects (Theme, Hydrogen Storefront, costmetika-intro).

Key files:
- `guides/COSTMETIKA-Brand-Identity-Guide.pdf` — full brand guide
- `colors/COSTMETIKA-Colors.json` — color tokens
- `colors/COSTMETIKA-design-tokens.css` — CSS custom properties
- `logos/` — all logo variants

## Remotion Video Project (`costmetika-presentation/`)

The code project lives in `costmetika-presentation/`, which has its own detailed CLAUDE.md. All commands must be run from that directory:

```bash
cd costmetika-presentation

npm start                                    # Remotion Studio (localhost:3000)
npm run build -- COSTMETIKA-Pro-V2           # Render recommended composition
npm run build -- COSTMETIKA-Pro-V2 --codec=h264 --crf=18 --concurrency=8  # High-quality render
npm run upgrade                              # Upgrade Remotion packages
```

Compositions: `CoverSlide`, `BrandPillarsSlide`, `RevenueSlide`, `COSTMETIKA-BrandVideo`, `COSTMETIKA-Professional`, `COSTMETIKA-Pro-V2` (recommended).

Rendered videos output to `costmetika-presentation/out/`.
