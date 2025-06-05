# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production 
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + Vite application for a Costa Rica surf app. The project uses:

- **React 19** with modern hooks and JSX
- **Vite** for fast development and building
- **ESLint** with React-specific rules including react-hooks and react-refresh plugins
- **ES Modules** throughout (type: "module" in package.json)

### Key Structure
- `src/App.jsx` - Main application component with surf spot booking functionality
- `src/main.jsx` - React app entry point
- `src/components/` - React components (Header, SurfSpotGrid, BookingModal)
- `src/data/surfSpots.js` - Surf spot data
- `vite.config.js` - Vite configuration with React plugin
- `eslint.config.js` - Modern ESLint flat config format

### Application Features
The app displays Costa Rica surf spots with booking functionality:
- Header navigation
- Hero section with app introduction
- Grid of surf spots with booking buttons
- Modal for surf trip booking

### ESLint Configuration
Uses flat config format with:
- React hooks rules enforcement
- React refresh for HMR compatibility
- Browser globals
- Custom rule for unused vars with capital letter exceptions