# Nebula One

A modern, animated product showcase website built with Next.js 15, featuring stunning animations and a premium user experience.

## 🚀 Tech Stack & Decisions

### Core Framework
- **Next.js 15** with App Router - Chosen for its excellent performance, SEO capabilities, and modern React features
- **TypeScript** - For type safety and better developer experience
- **React 18** - Latest React features including concurrent rendering

### Styling & UI
- **Tailwind CSS v4** - Modern utility-first CSS framework with the latest features
- **shadcn/ui** - High-quality, accessible component library built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives for building design systems
- **Lucide React** - Beautiful, customizable icons

### Animation & Motion
- **Framer Motion** - Professional-grade animation library for React
- **Custom CSS Animations** - Hand-crafted keyframe animations for unique effects
- **tw-animate-css** - Tailwind CSS animation utilities
- **CSS Transitions** - Smooth state transitions and hover effects

### Development Tools
- **ESLint** - Code quality and consistency
- **Turbopack** - Fast bundler for development (enabled in dev script)
- **PostCSS** - CSS processing and optimization

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── Footer.tsx        # Site footer
│   ├── Loader.tsx        # Loading component
│   └── ScrollToTop.tsx   # Scroll to top button
├── layout/               # Layout components
│   ├── Layout.tsx        # Main layout wrapper
│   └── Navbar.tsx        # Navigation component
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
└── sections/             # Page sections
    ├── Hero.tsx          # Hero section with animations
    ├── Showcase.tsx      # Product showcase
    ├── Features.tsx      # Features section
    ├── ProductSelector.tsx # Product selection
    └── SubscriptionForm.tsx # Newsletter signup
```

## 🎨 Animation Strategy

### Animation Tools & Decisions

1. **Framer Motion** - Used for complex component animations and page transitions
   - Provides smooth, performant animations
   - Excellent TypeScript support
   - Built-in gesture support

2. **Custom CSS Animations** - Created for unique, branded effects:
   - `fade-in-up`, `fade-in-down` - Staggered entrance animations
   - `float` - Subtle floating effect for product images
   - `pulse-glow` - Glowing background effects
   - `dramatic-entrance` - Complex multi-step animations

3. **CSS Transitions** - For interactive elements:
   - Hover effects on buttons and cards
   - Smooth color transitions
   - Scale and transform effects

### Animation Philosophy

- **Performance First** - Using CSS transforms and opacity for smooth 60fps animations
- **Progressive Enhancement** - Animations enhance but don't break functionality
- **Accessibility** - Respects `prefers-reduced-motion` preferences
- **Brand Consistency** - All animations follow a cohesive design language

## 🎯 Key Features

### Hero Section
- **Staggered Text Animation** - Title and subtitle animate in sequence
- **Dramatic Product Entrance** - iPhone image slides in from bottom with rotation
- **Interactive Background** - Animated gradient orbs with pulse effects
- **Smooth Scroll Navigation** - Animated scroll to features section

### Product Showcase
- **Parallax Effects** - Depth through layered animations
- **Hover Interactions** - Scale and glow effects on product images
- **Responsive Design** - Animations adapt to different screen sizes

### Performance Optimizations
- **Image Optimization** - Next.js Image component with proper sizing
- **Lazy Loading** - Components load as needed
- **CSS-in-JS Avoidance** - Using Tailwind for better performance
- **Bundle Optimization** - Tree shaking and code splitting

## 🛠️ Development

### Getting Started

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Environment Setup

- Node.js 18+ required
- Uses Next.js 15 with App Router
- TypeScript strict mode enabled
- ESLint configuration included

### Key Configuration Files

- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.ts` - Next.js configuration

## 🎨 Design System

### Color Palette
- **Primary**: Dark theme with blue/purple accents
- **Background**: Black with gradient overlays
- **Text**: White and gray variations
- **Accents**: Blue and purple gradients

### Typography
- **Headings**: Bold, large-scale typography
- **Body**: Light, readable fonts
- **Responsive**: Scales appropriately across devices

### Spacing & Layout
- **Consistent Spacing**: Using Tailwind's spacing scale
- **Responsive Grid**: Flexible layouts that adapt to screen size
- **Component Isolation**: Each section is self-contained

## 🚀 Deployment

The project is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting service**

### Build Output
- Static HTML generation for optimal performance
- Optimized images and assets
- Minified CSS and JavaScript

## 📱 Responsive Design

- **Mobile First** approach
- **Breakpoints**: xs, sm, md, lg, xl
- **Touch Friendly** interactions
- **Performance Optimized** for mobile devices

## 🔧 Customization

### Adding New Animations
1. Define keyframes in `globals.css`
2. Create utility classes in Tailwind
3. Apply to components with proper timing

### Component Development
1. Use shadcn/ui as base components
2. Extend with custom styling
3. Add animations using Framer Motion or CSS

### Styling Changes
1. Modify Tailwind configuration
2. Update CSS custom properties
3. Use design tokens for consistency

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using modern web technologies for an exceptional user experience.
