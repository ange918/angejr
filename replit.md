# Ange Akonde (BigSixteen) Portfolio

## Overview

A futuristic, interactive portfolio website for Ange Akonde (BigSixteen), a Full-Stack Developer & Software Engineer based in Benin. The site showcases projects, skills, testimonials, and contact information with a high-tech, minimalist design featuring deep navy backgrounds, cyan accents, and glow effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16** with App Router - Chosen for server-side rendering, file-based routing, and optimized performance
- **React 19** - Latest React with improved hydration and concurrent features
- **TypeScript** - Type safety across the codebase

### Styling Approach
- **Tailwind CSS 4** - Utility-first CSS with custom theme configuration
- **Custom CSS variables** for consistent theming (navy background, cyan accents, white text)
- **Custom fonts**: Ciguatera for headings, Montserrat for body text

### Animation & 3D
- **Framer Motion** - Declarative animations and page transitions
- **Three.js + React Three Fiber** - 3D laptop model in hero section with mouse-interactive rotation
- **COBE** - Interactive 3D globe component showing location marker

### Component Architecture
- Reusable UI components in `app/components/ui/` (flip-words, bento-grid, globe, apple-cards-carousel)
- Feature components in `app/components/` (ExpandableCard, HeroScene)
- Shared hooks in `hooks/` directory (use-outside-click)
- Utility functions in `app/utils/` (cn for classname merging)

### Hydration Handling
- `suppressHydrationWarning` on body element to handle browser extension conflicts
- Client components marked with `"use client"` directive where needed

### Design System
- Color palette: Navy (#020617), Cyan Electric (#06b6d4), White
- Glow effects via custom CSS classes (glow-border, glow-text)
- Responsive breakpoints following Tailwind conventions

## External Dependencies

### UI Libraries
- **@tabler/icons-react** - Icon set for UI elements
- **lucide-react** - Additional icon library
- **react-fast-marquee** - Scrolling marquee for skills section

### 3D & Animation
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **three** - Core 3D graphics library
- **cobe** - WebGL globe visualization
- **framer-motion / motion** - Animation library

### Utilities
- **clsx** - Conditional classname construction
- **tailwind-merge** - Intelligent Tailwind class merging

### Image Hosting
- Remote images allowed from `assets.aceternity.com`
- Local project images stored in `/images/` directory

### Development Configuration
- Runs on port 5000 with host binding for Replit compatibility
- Allowed dev origins configured for Replit domains
- Dev indicators disabled for cleaner development experience