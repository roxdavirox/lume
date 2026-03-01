/**
 * Theme System - Lume Design System
 */

// Tokens
export * from './tokens';

// CSS Variables
export { vars, lightTheme, darkTheme } from './cssVars.css';

// Presets
export { lumeTheme } from './presets/lume';
export { corporateTheme } from './presets/corporate';
export type { ThemeConfig } from './presets/lume';

// Theme utilities
export { createTheme, extendTheme } from './createTheme';
export type { CreateThemeOptions } from './createTheme';

// Theme provider
export { ThemeProvider, useTheme } from './ThemeProvider';
export type { ThemeMode, ThemeContextValue, ThemeProviderProps } from './ThemeProvider';
