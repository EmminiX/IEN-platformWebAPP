# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IEN Research Intelligence Platform is a Next.js 15 application for the Irish Environmental Network, featuring an intelligence report generation system for Ireland's environmental organizations. The platform allows users to select from 41 IEN member organizations and 6 key environmental topics to generate comprehensive reports via AI automation.

## Development Commands

### Core Development
```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

### Docker Deployment
```bash
# Build and deploy with Docker Compose
docker compose build
docker compose up -d

# Development environment
docker compose -f docker-compose.dev.yml up -d
```

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15.4.6 with React 19.1.0 and App Router
- **Styling**: Tailwind CSS 3.4.17 with custom design system
- **Animations**: Framer Motion 12.23.12 with tailwindcss-animate
- **Form Management**: React Hook Form 7.62.0 with Zod 4.0.17 validation
- **State Management**: Zustand 5.0.7
- **Data Visualization**: Recharts 3.1.2
- **TypeScript**: Strict mode enabled with path aliases (`@/*`)

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with Geist fonts
│   ├── page.tsx         # Home page with Hero + Research Form
│   ├── privacy/         # Privacy policy page
│   └── terms/          # Terms of use page
├── components/          # React components
│   ├── Hero.tsx         # Landing hero with animated SVG paths
│   ├── ResearchForm.tsx # Main form with org/topic selection
│   └── AIArchitectureInfo.tsx # Floating info component
└── lib/
    ├── data.ts          # Organization and topic data (41 orgs, 6 topics)
    └── utils.ts         # Utility functions and helpers
```

### Key Components

**Hero Component** (`src/components/Hero.tsx`):
- Animated SVG background with Framer Motion
- Glass morphism design with backdrop blur
- Smooth scroll to research form
- Responsive stats display (41 orgs, 6 topics, ∞ insights)

**Research Form** (`src/components/ResearchForm.tsx`):
- Multi-step form with organization selection (max 6)
- Topic selection with descriptions and icons
- Timeframe selection (30 days, 3 months, 6 months)
- Email validation and submission to n8n webhook
- Success state with auto-reset after 3 seconds

**Data Structure** (`src/lib/data.ts`):
- 41 Irish Environmental Network member organizations
- Organized by region (Dublin, Cork, Galway, Belfast, National)
- 8 organization types (Wildlife, Climate, Marine, Forest, Energy, Policy, Education, Conservation)
- 6 key environmental topics with icons and descriptions
- Complete TypeScript interfaces for type safety

### Design System

**Color Palette** (Atlantic Tech Theme):
- Primary: `ien-navy` (#1a365d), `ien-teal` (#2dd4bf), `ien-coral` (#ff6b6b)
- Supporting: `ien-charcoal` (#2d3748), `ien-mint` (#a7f3d0), `ien-slate` (#475569)
- Semantic colors for success, warning, error, and info states

**Typography**:
- Primary: Lexend (from Google Fonts) with Inter fallback
- Strict line-height ratios (1.7 for body, 1.3 for headings)
- 8px grid system for consistent spacing

**Component Classes**:
- `.btn-primary` - Main action buttons with navy background
- `.btn-accent` - Secondary buttons with coral background
- `.input-modern` - Form inputs with teal focus states
- `.card-selectable` - Interactive selection cards
- `.card-selected` - Selected state with teal accent

### Form Integration

The research form submits to an n8n webhook at `https://n8n.emmi.zone/webhook/11eb1656-fbc3-40c8-a11b-c95f67c330a2` with comprehensive data including:
- Selected organization details and metadata
- Topic descriptions and categorization
- Timeframe and user email
- Timestamp and source attribution
- Individual organization/topic IDs for processing

### Docker Configuration

**Multi-stage Production Build**:
- Stage 1: Dependencies with Alpine Linux
- Stage 2: Build with Next.js standalone output
- Stage 3: Production runtime with non-root user
- Security: Read-only filesystem, tmpfs mounts, resource limits
- Health checks and proper signal handling with dumb-init

**Traefik Integration**:
- Automatic HTTPS with Let's Encrypt
- Security headers (HSTS, XSS protection, frame deny)
- Rate limiting (10 req/s average, 20 burst)
- HTTP to HTTPS redirects

## Development Guidelines

### Code Style
- Use TypeScript strict mode with proper type definitions
- Follow the existing component patterns with Framer Motion animations
- Implement accessibility features (ARIA labels, keyboard navigation)
- Use the established color palette and design system classes

### Form Handling
- Validate all inputs with Zod schemas
- Provide clear error messaging with recovery instructions
- Implement loading states for better UX
- Follow the established selection patterns (max 6 organizations)

### Responsive Design
- Mobile-first approach with Tailwind responsive utilities
- Test grid layouts at sm (640px), lg (1024px) breakpoints
- Ensure touch-friendly interactions on mobile devices

### Performance
- Next.js 15 uses Turbopack for faster dev builds
- Standalone Docker output for optimized production
- Framer Motion animations respect `prefers-reduced-motion`
- Image optimization through Next.js built-in features

### Security
- CSP headers configured through Traefik
- Input validation and sanitization
- Non-root Docker container execution
- Environment variable management for sensitive data

## Data Management

Organizations and topics are statically defined in `src/lib/data.ts`. When adding new organizations:
1. Follow the existing interface structure
2. Include all required metadata (region, type, description)
3. Maintain alphabetical ordering within regions
4. Update the total count in Hero component if needed

Topic modifications require updating both the data structure and any dependent UI elements that reference topic counts or specific topic IDs.

## Deployment

The application is configured for production deployment with Docker and Traefik. Update the domain labels in `docker-compose.yml` before deployment:
- Replace `ien-research.yourdomain.com` with your actual domain
- Ensure Traefik network exists and is properly configured
- Verify webhook URL accessibility in production environment