# monorepo-template

My opinionated starter template for web apps, built using Turborepo.

This repo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `app`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `native`: a [React Native](https://reactnative.dev/) with expo-router app
- `@repo/config-eslint`: ESLint configurations used throughout the monorepo
- `@repo/config-typescript`: tsconfig.json's used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/ui`: a dummy React UI library (which contains `<CounterButton>` and `<Link>` components)
- `@repo/utils`: all utility functions goes here

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Removing extra apps

If any of the above apps is not required, you can just delete it and run yarn again.

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
