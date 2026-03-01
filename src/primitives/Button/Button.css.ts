/**
 * Button Styles - Vanilla Extract
 * Mobile First, Touch-Friendly (≥44px)
 */

import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../theme/cssVars.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

// Base button styles
export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  fontFamily: 'inherit',
  fontWeight: vars.fontWeight.medium,
  textAlign: 'center',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  transition: `all ${vars.transition.fast} ease`,
  position: 'relative',
  overflow: 'hidden',

  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  ':focus-visible': {
    outline: `2px solid ${vars.color.primary[500]}`,
    outlineOffset: '2px',
  },

  selectors: {
    '&:hover:not(:disabled)': {
      transform: 'translateY(-1px)',
    },
    '&:active:not(:disabled)': {
      transform: 'translateY(0)',
    },
  },
});

// Size variants (Mobile First - ≥44px minimum)
export const size = styleVariants({
  sm: {
    minHeight: '44px',
    minWidth: '44px',
    padding: `${vars.spacing.xs} ${vars.spacing.md}`,
    fontSize: vars.fontSize.sm,
    borderRadius: vars.borderRadius.base,
  },
  md: {
    minHeight: '48px',
    minWidth: '48px',
    padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
    fontSize: vars.fontSize.base,
    borderRadius: vars.borderRadius.md,
  },
  lg: {
    minHeight: '56px',
    minWidth: '56px',
    padding: `${vars.spacing.md} ${vars.spacing.xl}`,
    fontSize: vars.fontSize.lg,
    borderRadius: vars.borderRadius.lg,
  },
});

// Variant styles
export const variant = styleVariants({
  primary: {
    backgroundColor: vars.color.primary[500],
    color: 'white',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.primary[600],
        boxShadow: vars.shadow.md,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.primary[700],
      },
    },
  },

  secondary: {
    backgroundColor: vars.color.secondary[500],
    color: 'white',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.secondary[600],
        boxShadow: vars.shadow.md,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.secondary[700],
      },
    },
  },

  ghost: {
    backgroundColor: 'transparent',
    color: vars.color.primary[500],
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.primary[50],
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.primary[100],
      },
    },
  },

  danger: {
    backgroundColor: vars.color.error[500],
    color: 'white',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.error[600],
        boxShadow: vars.shadow.md,
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.error[700],
      },
    },
  },

  outline: {
    backgroundColor: 'transparent',
    color: vars.color.primary[500],
    border: `2px solid ${vars.color.primary[500]}`,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: vars.color.primary[50],
      },
      '&:active:not(:disabled)': {
        backgroundColor: vars.color.primary[100],
      },
    },
  },
});

// Full width
export const fullWidth = style({
  width: '100%',
});

// Loading state
export const loading = style({
  pointerEvents: 'none',
});

export const spinner = style({
  display: 'inline-block',
  width: '1em',
  height: '1em',
  border: '2px solid currentColor',
  borderRightColor: 'transparent',
  borderRadius: '50%',
  animation: `${spin} 0.6s linear infinite`,
});

// Icon positioning
export const iconLeft = style({
  marginRight: vars.spacing.xs,
});

export const iconRight = style({
  marginLeft: vars.spacing.xs,
});

export const iconOnly = style({
  padding: vars.spacing.sm,
});
