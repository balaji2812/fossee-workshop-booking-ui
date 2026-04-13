# FOSSEE Workshop Booking — Frontend

A mobile-first React application for booking free Python and open-source 
software workshops conducted by IIT Bombay experts.

## Live Pages
- Home, Login, Register, Book a Workshop, My Workshops

## Tech Stack
- React (JavaScript)
- Tailwind CSS
- React Router DOM

## Setup Instructions

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000`

## Design Reasoning

### What design principles guided your improvements?
- **Mobile-first layout**: All components were designed for small screens 
  first, then scaled up for desktop using Tailwind's responsive prefixes 
  (sm:, md:, lg:).
- **Visual hierarchy**: Clear heading sizes, consistent color usage 
  (FOSSEE blue #1a3fc4, yellow #f5a623), and adequate whitespace guide 
  the user's eye naturally.
- **Accessibility**: All form inputs have labels, buttons have sufficient 
  contrast, and tap targets are at least 44px tall for mobile usability.

### How did you ensure responsiveness?
- Used Tailwind CSS flex and grid utilities with responsive breakpoints.
- Navigation collapses to a hamburger menu on small screens.
- Forms stack vertically on mobile and go side-by-side on desktop.
- Cards in WorkshopList use full width on mobile.

### What trade-offs did you make?
- Chose Tailwind utility classes over a component library (like MUI) to 
  keep the bundle size small and load times fast on mobile networks.
- Kept animations minimal to reduce jank on lower-end devices.

### Most challenging part?
- Redesigning the navigation for mobile without losing the desktop 
  experience. Solved by implementing a responsive hamburger menu that 
  toggles visibility using React useState.

## Before & After Screenshots

### Before (Original Django Template)
- Plain unstyled login form
- No mobile responsiveness
- Minimal visual hierarchy

### After (Redesigned React Frontend)
- Mobile-first card-based layout
- FOSSEE brand colors throughout
- Clear CTAs and status indicators

## Contact
Submitted to: pythonsupport@fossee.in
