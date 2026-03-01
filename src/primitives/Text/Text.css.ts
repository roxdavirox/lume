/**
 * Text Styles - Vanilla Extract
 * Typography system
 */

import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme/cssVars.css';

// Variant styles
export const variant = styleVariants({
  h1: {
    fontSize: vars.fontSize['4xl'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: vars.fontSize['3xl'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: '1.25',
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: vars.fontSize['2xl'],
    fontWeight: vars.fontWeight.semibold,
    lineHeight: '1.3',
  },
  h4: {
    fontSize: vars.fontSize.xl,
    fontWeight: vars.fontWeight.semibold,
    lineHeight: '1.4',
  },
  h5: {
    fontSize: vars.fontSize.lg,
    fontWeight: vars.fontWeight.medium,
    lineHeight: '1.5',
  },
  h6: {
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.medium,
    lineHeight: '1.5',
  },
  body: {
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.normal,
    lineHeight: '1.6',
  },
  caption: {
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.normal,
    lineHeight: '1.5',
  },
  small: {
    fontSize: vars.fontSize.xs,
    fontWeight: vars.fontWeight.normal,
    lineHeight: '1.5',
  },
});

// Weight variants
export const weight = styleVariants({
  light: { fontWeight: vars.fontWeight.light },
  normal: { fontWeight: vars.fontWeight.normal },
  medium: { fontWeight: vars.fontWeight.medium },
  semibold: { fontWeight: vars.fontWeight.semibold },
  bold: { fontWeight: vars.fontWeight.bold },
});

// Align variants
export const align = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  justify: { textAlign: 'justify' },
});

// Color variants
export const color = styleVariants({
  foreground: { color: vars.color.foreground },
  muted: { color: vars.color.gray[600] },
  primary: { color: vars.color.primary[500] },
  secondary: { color: vars.color.secondary[500] },
  success: { color: vars.color.success[500] },
  warning: { color: vars.color.warning[500] },
  error: { color: vars.color.error[500] },
});

// Truncate
export const truncate = styleVariants({
  true: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  false: {},
});
