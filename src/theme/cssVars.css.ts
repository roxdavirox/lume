/**
 * CSS Variables com Vanilla Extract
 * Type-Safe CSS Variables para theming dinâmico
 */

import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';
import {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadii,
  shadows,
  transitions,
} from './tokens';

// ============================================================================
// THEME CONTRACT - Define estrutura das CSS Variables
// ============================================================================

export const vars = createThemeContract({
  color: {
    primary: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
    secondary: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
    success: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
    warning: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
    error: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
    gray: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
    background: '',
    foreground: '',
    border: '',
  },
  spacing: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
    '4xl': '',
  },
  fontSize: {
    xs: '',
    sm: '',
    base: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
    '4xl': '',
    '5xl': '',
    '6xl': '',
  },
  fontWeight: {
    light: '',
    normal: '',
    medium: '',
    semibold: '',
    bold: '',
  },
  borderRadius: {
    sm: '',
    base: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    full: '',
  },
  shadow: {
    sm: '',
    base: '',
    md: '',
    lg: '',
    xl: '',
  },
  transition: {
    fast: '',
    normal: '',
    slow: '',
  },
});

// ============================================================================
// LIGHT THEME (Default)
// ============================================================================

export const lightTheme = createTheme(vars, {
  color: {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    gray: colors.gray,
    background: colors.background.light,
    foreground: colors.foreground.light,
    border: colors.border.light,
  },
  spacing: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
    '2xl': spacing['2xl'],
    '3xl': spacing['3xl'],
    '4xl': spacing['4xl'],
  },
  fontSize: {
    xs: fontSizes.xs,
    sm: fontSizes.sm,
    base: fontSizes.base,
    lg: fontSizes.lg,
    xl: fontSizes.xl,
    '2xl': fontSizes['2xl'],
    '3xl': fontSizes['3xl'],
    '4xl': fontSizes['4xl'],
    '5xl': fontSizes['5xl'],
    '6xl': fontSizes['6xl'],
  },
  fontWeight: {
    light: fontWeights.light,
    normal: fontWeights.normal,
    medium: fontWeights.medium,
    semibold: fontWeights.semibold,
    bold: fontWeights.bold,
  },
  borderRadius: {
    sm: borderRadii.sm,
    base: borderRadii.base,
    md: borderRadii.md,
    lg: borderRadii.lg,
    xl: borderRadii.xl,
    '2xl': borderRadii['2xl'],
    full: borderRadii.full,
  },
  shadow: {
    sm: shadows.sm,
    base: shadows.base,
    md: shadows.md,
    lg: shadows.lg,
    xl: shadows.xl,
  },
  transition: {
    fast: transitions.duration.fast,
    normal: transitions.duration.normal,
    slow: transitions.duration.slow,
  },
});

// ============================================================================
// DARK THEME
// ============================================================================

export const darkTheme = createTheme(vars, {
  color: {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    gray: colors.gray,
    background: colors.background.dark,
    foreground: colors.foreground.dark,
    border: colors.border.dark,
  },
  spacing: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
    '2xl': spacing['2xl'],
    '3xl': spacing['3xl'],
    '4xl': spacing['4xl'],
  },
  fontSize: {
    xs: fontSizes.xs,
    sm: fontSizes.sm,
    base: fontSizes.base,
    lg: fontSizes.lg,
    xl: fontSizes.xl,
    '2xl': fontSizes['2xl'],
    '3xl': fontSizes['3xl'],
    '4xl': fontSizes['4xl'],
    '5xl': fontSizes['5xl'],
    '6xl': fontSizes['6xl'],
  },
  fontWeight: {
    light: fontWeights.light,
    normal: fontWeights.normal,
    medium: fontWeights.medium,
    semibold: fontWeights.semibold,
    bold: fontWeights.bold,
  },
  borderRadius: {
    sm: borderRadii.sm,
    base: borderRadii.base,
    md: borderRadii.md,
    lg: borderRadii.lg,
    xl: borderRadii.xl,
    '2xl': borderRadii['2xl'],
    full: borderRadii.full,
  },
  shadow: {
    sm: shadows.sm,
    base: shadows.base,
    md: shadows.md,
    lg: shadows.lg,
    xl: shadows.xl,
  },
  transition: {
    fast: transitions.duration.fast,
    normal: transitions.duration.normal,
    slow: transitions.duration.slow,
  },
});

// ============================================================================
// GLOBAL STYLES
// ============================================================================

createGlobalTheme(':root', {
  font: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
});
