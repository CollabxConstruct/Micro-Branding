# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## System Environment

- **Platform**: Windows 11 Home (Build 26200)
- **Shell**: PowerShell / Git Bash
- **User**: shach
- **Home**: `C:\Users\shach`
- **Claude Code**: 2.1.29

## Development Tools

### Languages & Runtimes
- **Python**: 3.13.11 (also has 3.14 via pip path)
- **Node.js**: 24.13.0
- **Git**: 2.52.0 (Windows)

### Package Managers
- **pip**: 25.3
- **npm**: 11.8.0
- **pnpm**: 10.28.2
- **Poetry**: 2.3.1

### IDEs & CLIs
- **VS Code**: 1.108.2
- **GitHub CLI (gh)**: 2.64.0

### Not Available on PATH
- Docker, Rust, Go, Java

## Active Projects

### AI Agent Platform (AutoGPT)
- **Location**: `C:\Dev\AutoGPT-temp\autogpt_platform`
- **Type**: Monorepo (Python FastAPI backend + Next.js frontend)
- **Backend**: Python 3.10-3.12, Poetry, FastAPI, Prisma, Redis, PostgreSQL
- **Frontend**: Next.js 15, React 18, TypeScript, pnpm, TailwindCSS, Radix UI
- **Commands**:
  - Backend: `poetry install`, `poetry run app`
  - Frontend: `pnpm install`, `pnpm dev`

### COSTMETIKA (Shopify Theme)
- **Location**: `C:\Users\shach\OneDrive\Documents\GitHub\Android-AOSP`
- **Type**: Shopify Liquid theme (despite repo name "Android-AOSP")
- **Brand**: COSTMETIKA beauty products (NOTE: Spelled with T before M)
- **Tech**: Liquid templates, JavaScript, CSS
- **Structure**: `sections/`, `snippets/`, `templates/`, `layout/`, `locales/`, `config/`, `assets/`, `src/`, `tests/`
- **Assets**: Brand assets located in `Documents/COSTMETIKA-Brand-Assets` and `Documents/COSTMETIKA-Brand-System`

### Other Repositories
- **Codex Universal**: `C:\Users\shach\OneDrive\Documents\GitHub\codex-universal` - Docker reference image for OpenAI Codex
- **OpenAI.com**: `C:\Users\shach\OneDrive\Documents\GitHub\openai.com` - Empty clone

## Windows Commands & PowerShell Preferences

When executing commands on Windows, use PowerShell syntax:

```powershell
# List files
Get-ChildItem -Path "C:\path\to\folder"

# Find files recursively
Get-ChildItem -Path "C:\path" -Recurse -Filter "*.py"

# Check running processes
Get-Process

# Check ports in use
Get-NetTCPConnection -LocalPort 8000

# Kill process on port
Get-Process -Id (Get-NetTCPConnection -LocalPort 8000).OwningProcess | Stop-Process

# Environment variables
$env:PATH
[Environment]::GetEnvironmentVariable("PATH", "User")
```

**PowerShell Rules**:
1. Use semicolons instead of `&&` for chaining commands
2. Use full Windows paths with backslashes
3. Quote paths containing spaces with double quotes
4. Use `Get-ChildItem` instead of `ls` for scripting
5. Use `Set-Location` or `cd` for navigation

## Coding Standards

### Python
- Use `black` for formatting, `ruff` for linting
- Prefer `pathlib` over `os.path`
- Use dataclasses or Pydantic models for structured data
- Async/await for I/O operations
- Type hints required

### TypeScript/JavaScript
- Use TypeScript with strict mode when possible
- Prefer functional patterns (map, filter, reduce)
- Use React hooks appropriately
- Follow ESLint/Prettier configurations in project

### Shopify / Liquid
- Follow Shopify theme conventions for template structure
- Keep sections modular and reusable
- Use JSON settings schemas for section customization

### General Style
- Prefer concise, readable code over verbose implementations
- Use type hints in Python, TypeScript types in JS/TS projects
- Follow existing project conventions when contributing
- Keep functions focused and single-purpose

## Git Workflow

### Commit Messages
Use conventional commits format: `type(scope): description`
- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Keep commits focused and atomic
- Write clear, descriptive commit messages

### Pull Requests
- Include summary of changes
- List any breaking changes
- Add test plan or verification steps
- Reference related issues
- Prefer small, focused PRs

## Testing
- Write tests for new functionality
- Use pytest for Python
- Use Playwright for frontend E2E testing
- Mock external dependencies appropriately

## Available MCP Servers & Tools

### Design & UI
- **Figma MCP**: Design-to-code, screenshots, design variables, component mapping
- **Stitch MCP**: UI/screen generation from text descriptions

### AI & Models
- **HuggingFace MCP**: Model search, dataset discovery, paper research, image generation

### Productivity
- **Notion MCP**: Search, create, update pages and databases
- **GitHub MCP**: Repository operations, issues, PRs, code search

### Browser & Automation
- **Chrome MCP**: Browser automation, scraping, form filling, screenshots, debugging
- **Windows MCP**: OS automation, UI control, PowerShell execution

### Development
- **Desktop Commander MCP**: Filesystem operations, terminal sessions, process management
- **PDF Tools**: Read, analyze, fill forms, extract data from PDFs
- **Filesystem MCP**: Direct local filesystem access

### Other
- **Domain Check MCP**: Domain availability lookup and suggestions
- **Sheet Music Player MCP**: Play sheet music notation

## Creative & Branding Skills

The following skills are available via the Skill tool for creative and strategic work:

- **brand-strategy**: Brand strategy, identity systems, positioning frameworks, guidelines
- **business-proposal**: Proposals, SOWs, scope documents, pricing strategies
- **campaign-strategy**: Campaign strategies, media plans, go-to-market plans
- **competitive-analysis**: Competitive analysis, market positioning, SWOT analysis
- **consumer-insights**: Audience personas, research frameworks, trend analysis
- **content-strategy**: Content strategies, editorial calendars, social media strategies
- **creative-brief**: Write and structure creative briefs for campaigns and projects
- **design-direction**: Creative direction, art direction, design critique, visual strategy
- **ecommerce-strategy**: E-commerce optimization, CRO, DTC strategy, marketplace strategy
- **pitch-deck**: Pitch decks, presentations, capability decks, case studies
- **frontend-design**: Production-grade frontend interfaces with high design quality

## Project Preferences

1. **Always check for existing patterns** before implementing new code
2. **Prefer editing over creating** new files when extending functionality
3. **Use project-specific tools** (Poetry, pnpm) as configured
4. **Run tests** after making changes when test infrastructure exists
5. **Keep dependencies minimal** - only add what's necessary
6. **Document breaking changes** clearly in commits and PRs

## Notes

- OneDrive sync issues resolved by moving AutoGPT to local drive (`C:\Dev\`)
- Original AutoGPT location: `C:\Users\shach\OneDrive\Documents\GitHub\AutoGPT\autogpt_platform` (backup)
- Brand assets for COSTMETIKA stored separately from theme repository
