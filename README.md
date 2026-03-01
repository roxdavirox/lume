# lume

**Mobile-first React components. Zero runtime CSS. PWA-native. Dark mode built-in.**

[![CI](https://github.com/roxdavirox/lume/actions/workflows/ci.yml/badge.svg)](https://github.com/roxdavirox/lume/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/lume)](https://www.npmjs.com/package/lume)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/lume)](https://bundlephobia.com/package/lume)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## Why lume?

| | lume | shadcn/ui | Radix | MUI |
|---|---|---|---|---|
| Zero runtime CSS | ✅ (Vanilla Extract) | ⚠️ (Tailwind) | ❌ | ❌ (emotion) |
| Mobile first (≥44px touch) | ✅ | ❌ | ❌ | ⚠️ |
| PWA components built-in | ✅ | ❌ | ❌ | ❌ |
| Dark mode (CSS vars, no JS flicker) | ✅ | ✅ | ⚠️ | ⚠️ |
| `createTheme` / `extendTheme` typed | ✅ | ❌ | ❌ | ✅ |
| Tree-shakeable per component | ✅ | ✅ | ✅ | ⚠️ |
| Zero config SSR-safe | ✅ | ⚠️ | ✅ | ⚠️ |

**Zero runtime** means: no CSS-in-JS executed at render time. Vanilla Extract compiles styles at build time — the output is plain CSS. Same performance as Tailwind, with full TypeScript type-safety and co-location.

---

## Install

```bash
npm install lume
# or
pnpm add lume
```

**Peer dependencies:**
```bash
npm install react react-dom
```

---

## Quick Start

```tsx
import { ThemeProvider, lumeTheme } from 'lume/theme';
import { Button, Stack, Text } from 'lume';

export default function App() {
  return (
    <ThemeProvider theme={lumeTheme} defaultMode="light">
      <Stack gap="md" align="center">
        <Text size="2xl" weight="bold">Hello lume</Text>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button variant="ghost" iconLeft={<span>←</span>}>
          Go back
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
```

---

## Components

### Primitives
| Component | Description |
|-----------|-------------|
| `Button` | 5 variants, 3 sizes, loading state, icon slots |
| `Input` | Controlled/uncontrolled, error state, prefix/suffix |
| `Text` | Semantic typography with size + weight scale |
| `Box` | Layout primitive with spacing and color props |
| `Stack` | Flex-based layout with gap and alignment |
| `Icon` | Normalized icon wrapper with size prop |

### Feedback
| Component | Description |
|-----------|-------------|
| `Alert` | info / success / warning / error variants |
| `Modal` | Accessible dialog with backdrop and focus trap |
| `Spinner` | Loading indicator, configurable size and color |
| `Toast` | Non-blocking notifications with auto-dismiss |

### Forms
| Component | Description |
|-----------|-------------|
| `FormField` | Label + input + error message wrapper |
| `SearchBar` | Search input with clear button and debounce |

### PWA
| Component | Description |
|-----------|-------------|
| `InstallPrompt` | Native-feeling "Add to Home Screen" prompt |
| `OfflineIndicator` | Banner shown when network is unavailable |
| `UpdateNotification` | "New version available" prompt with refresh action |

### Patterns
| Component | Description |
|-----------|-------------|
| `AppShell` | Top nav + sidebar + main content layout |

### Hooks
| Hook | Description |
|------|-------------|
| `useNetworkStatus` | `{ online, effectiveType, downlink }` |
| `usePWA` | `{ isInstallable, isInstalled, install, updateAvailable }` |
| `useTheme` | `{ theme, mode, setMode, toggleMode }` |

---

## Theme System

### Built-in presets

```tsx
import { lumeTheme, corporateTheme } from 'lume/theme';
```

### Custom theme

```tsx
import { createTheme } from 'lume/theme';

const brandTheme = createTheme({
  name: 'brand',
  colors: {
    primary: {
      50:  '#fdf4ff',
      500: '#a855f7', // your brand color
      900: '#581c87',
      // ...
    },
    // ... other color scales
  },
});
```

### Extend an existing theme

```tsx
import { extendTheme, lumeTheme } from 'lume/theme';

const myTheme = extendTheme(lumeTheme, {
  name: 'my-brand',
  colors: {
    ...lumeTheme.colors,
    primary: { ...lumeTheme.colors.primary, 500: '#ff6b35' },
  },
});
```

### Dark mode

```tsx
const { mode, toggleMode } = useTheme();

// Reads from: localStorage → prefers-color-scheme → defaultMode
// Applies: CSS class on <html> — zero JS at render time
```

---

## Tree-shaking

Import only what you use. Every component has its own entry point:

```tsx
// Full bundle
import { Button, Modal, Toast } from 'lume';

// Per-component (smallest possible bundle)
import { Button } from 'lume/primitives/Button';
import { Modal } from 'lume/components/feedback/Modal';
import { useNetworkStatus } from 'lume/hooks';
```

---

## Design Tokens

All tokens are available as typed constants:

```tsx
import { colors, spacing, fontSizes, shadows } from 'lume/theme';

colors.primary[500] // '#0ea5e9'
spacing.md          // '1rem'
fontSizes.lg        // '1.125rem'
shadows.xl          // '0 20px 25px ...'
```

---

## Requirements

- React ≥ 18
- TypeScript ≥ 5.0 (recommended)
- Vite, Next.js, or any bundler that supports Vanilla Extract

### Vanilla Extract setup

```bash
npm install -D @vanilla-extract/vite-plugin
# or for Next.js:
npm install -D @vanilla-extract/next-plugin
```

---

## License

MIT © [roxdavirox](https://github.com/roxdavirox)
