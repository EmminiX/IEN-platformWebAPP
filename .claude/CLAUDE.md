# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The IEN Research Intelligence Platform is a Next.js 15 application for the Irish Environmental Network, featuring a research form interface that collects environmental organization and topic data. The application uses React 19, TypeScript, Tailwind CSS, and is containerized for production deployment.

## Development Commands

### Local Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build with standalone output
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (disabled during builds via next.config.ts)

### Docker Development & Deployment
- `docker compose build` - Build production Docker image
- `docker compose up -d` - Start containerized application
- `docker compose -f docker-compose.dev.yml up` - Development environment with hot reload

## Architecture & Key Patterns

### Component Structure
The application follows a component-based architecture with three main UI components:
- `Hero` - Landing section with branding and navigation
- `ResearchForm` - Core functionality for collecting research preferences
- `AIArchitectureInfo` - Floating information panel

### Data Architecture
Research data is centralized in `/src/lib/data.ts` with strongly typed interfaces:
- `Organization` - Irish environmental organizations with region/type classification
- `Topic` - Environmental research topics with metadata
- `FormData` - User research preferences and email collection

### Styling System
Custom Tailwind configuration with IEN brand colors:
- Primary palette: `ien-navy`, `ien-teal`, `ien-coral`, `ien-charcoal`
- Supporting colors: `ien-slate`, `ien-mint`, `ien-orange`
- Semantic colors for UX consistency

### Form Handling Pattern
The ResearchForm component uses:
- Client-side validation with custom `FormErrors` interface
- TypeScript type guards for email validation (`isValidEmail`)
- State management with React hooks for submission states
- Proper TypeScript filtering with type predicates for data processing

## Docker Configuration

### Multi-stage Build Process
1. **deps stage**: Install production dependencies only
2. **builder stage**: Install all dependencies and build application
3. **runner stage**: Minimal runtime with security hardening

### Next.js Configuration
- `output: 'standalone'` for Docker optimization
- `eslint.ignoreDuringBuilds: true` to prevent build failures
- Telemetry disabled for production

### Security Features
- Non-root user (nextjs:nodejs) with proper permissions
- Alpine Linux base with security updates
- Health checks and proper signal handling with dumb-init

## TypeScript Considerations

### Type Safety Patterns
When filtering arrays with potential undefined values, use proper type predicates:
```typescript
.filter((item): item is NonNullable<typeof item> => Boolean(item))
```

### Form Data Handling
The application uses strict TypeScript validation for form processing. When working with user selections, ensure proper type guards are maintained for the mapping between IDs and objects.

## Environment Configuration

Production environment variables:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

## Network Architecture

The application is configured for Traefik reverse proxy deployment with proper health checks and container networking. The Docker setup assumes external Traefik configuration for SSL termination and routing.