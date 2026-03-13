# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start development server
yarn start

# Run on specific platform
yarn ios
yarn android
yarn web

# Lint
yarn lint

# Install dependencies
yarn install
```

There is no test runner script configured; tests use `react-test-renderer` and can be run directly via Jest if needed.

## Architecture

This is an **Expo Router** app (React Native + web) using the **file-based routing** system. All source code lives under `src/`, with the path alias `@/` mapping to `src/`.

### Routing Structure

```
src/app/
  _layout.tsx          # Root layout — loads fonts, manages auth guard
  (public)/            # Unauthenticated routes (e.g. login/welcome)
  (private)/           # Authenticated routes (protected by Stack.Protected)
    (tabs)/            # Bottom tab navigator
      home/            # Nested stack for tab one (index + details screens)
      two.tsx          # Tab two
    user.tsx           # User profile screen
  modal.tsx            # Modal screen (accessible from private area)
  +not-found.tsx
  +html.tsx            # Web-only HTML shell
```

Auth routing is handled in `src/app/_layout.tsx` using `Stack.Protected` — `(public)` shows when not logged in, `(private)` when logged in. Auth state will live in `src/modules/auth/stores/useAuthStore.ts` (Zustand).

### State Management

**Zustand** (`zustand`) is used for global state. Stores are organized by module under `src/modules/<module>/stores/`.

### Module Structure

Feature code goes under `src/modules/<module>/` (e.g. `src/modules/auth/`). Shared components, hooks, and constants are in `src/components/` and `src/constants/`.

## Code Style

- **Prettier** enforces formatting (120 char line width, single quotes, trailing commas, LF line endings).
- **Import order** is enforced by `@trivago/prettier-plugin-sort-imports`: `react` → `react-native` → third-party → `@/` aliases → relative.
- **ESLint** rules to be aware of:
  - No inline styles in React Native (`react-native/no-inline-styles: error`) — all styles must be in a `StyleSheet` object.
  - No variable shadowing (`@typescript-eslint/no-shadow: error`).
  - Unused variables must be prefixed with `_` to be allowed.
  - Blank lines are required before `return`, `if`, `throw`, `export`, and after `const` declarations (enforced via `padding-line-between-statements`).
  - Unused imports are forbidden.
- **TypeScript strict mode** is enabled.
