# Tailrly App

A modern web application for managing designer profiles and measurements, built with Next.js and Tailwind CSS.

## Project Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server (runs on http://localhost:3000) |
| `npm run build` | Build the application for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

## Project Structure

```
tailrly-app/
├── app/                          # Root app directory (Next.js App Router)
│   ├── layout.tsx                # Root layout with SiteHeader
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
│
├── src/
│   ├── app/                      # Feature-based app pages
│   │   ├── dashboard/            # Dashboard page
│   │   ├── designers/            # Designers page
│   │   ├── login/                # Login page
│   │   ├── marketing/            # Marketing page
│   │   ├── measurements/         # Measurements page
│   │   └── page.tsx              # Alternative home page
│   │
│   └── components/               # Reusable React components
│       ├── app/                  # Application-specific components
│       └── site/                 # Site-wide components
│           └── SiteHeader.tsx    # Navigation header (used on all pages)
│
├── public/                       # Static assets
├── package.json                  # Project dependencies and scripts
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── eslint.config.mjs             # ESLint configuration
```

## Folder Descriptions

### `/app`
The main application entry point using Next.js App Router. Contains the root layout which wraps all pages and includes the site-wide header.

### `/src/app`
Feature-specific pages and routes organized by domain:
- **dashboard/** - Admin/user dashboard views
- **designers/** - Designer profiles and listings
- **login/** - Authentication page
- **marketing/** - Marketing and promotional pages
- **measurements/** - Measurement collection and tracking
- **page.tsx** - Alternative routing structure

### `/src/components`
Reusable React components organized by scope:
- **site/** - Components shared across the entire application
  - `SiteHeader.tsx` - Global navigation header (Home, Designers, Login links)
- **app/** - Application-specific components for individual features

### `/public`
Static assets served directly (images, favicons, fonts, etc.).

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org) 16.1.6 - React-based full-stack framework
- **UI Library**: [React](https://react.dev) 19.2.3 - Component-based UI
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4 - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org) 5 - Type-safe JavaScript
- **Linting**: [ESLint](https://eslint.org) 9 - Code quality and style checking

## Development Workflow

1. Run `npm run dev` to start the development server
2. Open [http://localhost:3000](http://localhost:3000) in your browser
3. Edit files in `src/app` or `src/components` - changes auto-refresh via hot module reloading
4. Run `npm run lint` before committing to check for code issues

## Building for Production

```bash
npm run build
npm start
```

The app will be bundled and optimized for production deployment.

## Component Architecture

The app follows a modular component pattern:

- **SiteHeader** - Site-wide navigation rendered in the root layout
- Page components in `/src/app` handle feature-specific routing
- Shared components in `/src/components` are reused across features
