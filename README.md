# Gymster App

A modern workout tracking application built with React, TypeScript, and Vite. Track your workouts, monitor progress, and achieve your fitness goals.

## Features

- 🏋️‍♂️ Create and manage workouts
- 📊 Track exercise sets, reps, and weights
- 📱 Responsive design
- 🔐 User authentication with Supabase
- 💾 Real-time data persistence
- 📈 Progress monitoring
- 📅 Workout calendar (coming soon)

## TODO

### Features

- [ ] Implement workout calendar functionality
- [ ] Add progress tracking charts and analytics
- [ ] Create workout templates/presets
- [ ] Add social features (sharing workouts, following users)
- [ ] Implement workout reminders and notifications
- [ ] Add exercise library with proper form guides

### Technical Improvements

- [ ] Set up unit testing
- [ ] Add E2E
- [ ] Implement proper error boundaries
- [ ] Add PWA support
- [ ] Optimize bundle size and loading performance
- [ ] Add offline support
- [ ] Implement proper data caching strategy
- [ ] Add comprehensive API documentation
- [ ] Set up CI/CD pipeline

### UI/UX Improvements

- [ ] Add i18n support
- [ ] Add dark mode support
- [ ] Implement skeleton loading states
- [ ] Add proper form validation feedback
- [ ] Improve mobile responsiveness
- [ ] Add proper error states and empty states
- [ ] Implement proper loading indicators
- [ ] Add proper toast notifications
- [ ] Improve accessibility (ARIA labels, keyboard navigation)

### Documentation

- [ ] Add API documentation
- [ ] Create component documentation with Storybook
- [ ] Add proper JSDoc comments
- [ ] Create user documentation/guide
- [ ] Add contributing guidelines
- [ ] Add code of conduct
- [ ] Create changelog

## Tech Stack

- React 19 (RC)
- TypeScript
- Vite
- Redux Toolkit
- Styled Components
- Supabase
- React Hook Form
- Zod
- React Router DOM

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- Git

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gymster-app.git
   cd gymster-app
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory with your Supabase credentials:

   ```env
   VITE_SUPABASE_API_URL="your-supabase-url"
   VITE_SUPABASE_API_KEY="your-supabase-anon-key"
   ```

4. Generate Supabase types:

   ```bash
   pnpm generate-types
   ```

5. Prepare Husky:

   ```bash
   pnpm husky:prepare
   ```

6. Start the development server:
   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix linting issues
- `pnpm generate-types` - Generate Supabase types
- `pnpm husky:prepare` - Prepare Husky

## Project Structure

```
src/
├── api/            # API integration and Supabase client
├── lib/            # Shared utilities and configurations
├── routes/         # Route components and configurations
├── styles/         # Global styles and theme
├── ui/             # UI components and views
│   ├── components/ # Reusable components
│   └── views/      # Page-specific components
├── utils/          # Helper functions and hooks
└── types/          # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
