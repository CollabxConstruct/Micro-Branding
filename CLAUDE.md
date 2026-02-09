# Micro Branding - Remotion Workspace

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Micro Branding is a brand development workspace using Remotion for creating video content and brand animations.

**Purpose**: Small-scale brand development, identity work, video/animation content generation

**Tech Stack**: Remotion (React-based video framework), Node.js, TypeScript

## Quick Start

```bash
# Install dependencies
npm install

# Start Remotion Studio (opens browser at http://localhost:3000)
npm start

# Render video
npm run build

# Render specific composition
npm run build -- --props='{"title":"My Brand"}'

# Render to MP4
npm run build -- --codec=h264
```

## System Environment

For system-wide tools and conventions, see `~/.claude/CLAUDE.md`

- **Platform**: Windows 11
- **Node.js**: 24.13.0
- **Package Manager**: npm 11.8.0

## Project Structure

```
Micro-Branding/
├── src/
│   ├── Root.tsx              # Root composition
│   ├── Composition.tsx       # Main composition
│   └── [other compositions]  # Additional video compositions
├── public/                   # Static assets (images, fonts, etc.)
├── out/                      # Rendered video output (gitignored)
├── remotion.config.ts        # Remotion configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Remotion-Specific Notes

### Composition Development

- All compositions are in `src/` directory
- Entry point is `src/Root.tsx` which registers all compositions
- Video settings (resolution, FPS, duration) in `remotion.config.ts`
- Use `useCurrentFrame()` hook to animate based on frame number
- Use `interpolate()` to map frame ranges to animation values

### Asset Management

- Static assets go in `public/` directory
- Reference with `staticFile('filename.png')`
- Fonts should be imported in CSS or via `@remotion/google-fonts`
- Images and videos can be absolute URLs or local files

### Rendering

- Output videos go to `out/` directory
- Default format is MP4 (H.264 codec)
- Customize output in `remotion.config.ts` or via CLI flags
- Use `--concurrency` flag to speed up rendering (default: half of CPU cores)

## Common Commands

```bash
# Development
npm start                              # Start Remotion Studio
npm start -- --port=3001               # Use different port

# Rendering
npm run build                          # Render all compositions
npm run build -- --output=video.mp4    # Custom output name
npm run build -- --codec=h265          # Use H.265 codec
npm run build -- --concurrency=8       # Use 8 CPU cores

# Upgrade Remotion
npm run upgrade                        # Update all Remotion packages
```

## Remotion Configuration

Key settings in `remotion.config.ts`:

```typescript
// Video format
codec: 'h264'            // or 'h265', 'vp8', 'vp9', 'prores'

// Performance
concurrency: 50%         // CPU cores to use (null = half)

// Output
outputLocation: 'out/'   // Where to save rendered videos
overwriteOutput: true    // Overwrite existing files

// Quality
crf: 18                  // Lower = better quality (15-28 typical)
```

## Common Issues

### Remotion Studio not opening
- Check if port 3000 is available
- Kill process on port: `Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process`
- Try: `npm start -- --port=3001`

### Render fails
- Ensure Chrome/Chromium is installed
- Check Node.js version compatibility (requires Node 18+)
- Verify all dependencies installed: `npm install`
- Check console for specific error messages

### Slow rendering
- Increase concurrency: `npm run build -- --concurrency=8`
- Use hardware acceleration if available
- Simplify compositions (reduce effects/layers)
- Use `--log=verbose` to identify bottlenecks

### Font not loading
- Import fonts in `src/` files, not just CSS
- Use `@remotion/google-fonts` for Google Fonts
- Ensure font files are in `public/` if using local fonts
- Check browser console in Remotion Studio

### TypeScript errors
- Run `npm run build` to see full error output
- Check `tsconfig.json` configuration
- Ensure all Remotion packages are same version
- Clear cache: `rm -rf node_modules .remotion && npm install`

## Animation Tips

### Frame-based Animation

```typescript
import { useCurrentFrame, interpolate } from 'remotion';

const frame = useCurrentFrame();

// Fade in over 30 frames
const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});

// Slide from left
const translateX = interpolate(frame, [0, 40], [-100, 0]);
```

### Timing

- Remotion uses frame numbers, not seconds
- At 30fps: frame 30 = 1 second
- Use `durationInFrames` prop in composition config
- Chain animations by offsetting frame ranges

## Resources

- [Remotion Documentation](https://remotion.dev/docs)
- [Remotion Examples](https://remotion.dev/showcase)
- [Remotion Discord](https://remotion.dev/discord)

## Git Workflow

Use conventional commits (see `~/.claude/CLAUDE.md` for format):
- `feat(composition): add new intro animation`
- `fix(render): resolve font loading issue`
- `refactor(assets): reorganize brand assets`

## Notes

- This project is on local drive (`C:\Dev\`) to avoid OneDrive sync issues
- Rendered videos in `out/` are gitignored (can be large files)
- Use Remotion Studio for live preview during development
- Render times depend on composition complexity and duration
