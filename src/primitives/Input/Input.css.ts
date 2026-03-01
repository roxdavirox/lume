/**
 * Input Styles - Vanilla Extract
 * Mobile First, Touch-Friendly
 */

import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../theme/cssVars.css';

// Base input styles
export const input = style({
  width: '100%',
  minHeight: '44px',
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  fontSize: vars.fontSize.base,
  fontFamily: 'inherit',
  lineHeight: vars.fontSize.base,
  color: vars.color.foreground,
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.borderRadius.md,
  outline: 'none',
  transition: `all ${vars.transition.fast} ease`,
  WebkitTapHighlightColor: 'transparent',

  '::placeholder': {
    color: vars.color.gray[400],
  },

  ':focus': {
    borderColor: vars.color.primary[500],
    boxShadow: `0 0 0 3px ${vars.color.primary[100]}`,
  },

  ':disabled': {
    backgroundColor: vars.color.gray[100],
    cursor: 'not-allowed',
    opacity: 0.6,
  },
});

// State variants
export const state = styleVariants({
  default: {},
  error: {
    borderColor: vars.color.error[500],
    ':focus': {
      borderColor: vars.color.error[500],
      boxShadow: `0 0 0 3px ${vars.color.error[100]}`,
    },
  },
  success: {
    borderColor: vars.color.success[500],
    ':focus': {
      borderColor: vars.color.success[500],
      boxShadow: `0 0 0 3px ${vars.color.success[100]}`,
    },
  },
});

// Container for addons
export const container = style({
  display: 'flex',
  alignItems: 'stretch',
  position: 'relative',
  width: '100%',
});

// Addon styles
export const addon = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: vars.color.gray[100],
  border: `1px solid ${vars.color.border}`,
  color: vars.color.gray[600],
  fontSize: vars.fontSize.sm,
  whiteSpace: 'nowrap',
});

export const addonLeft = style([
  addon,
  {
    borderTopLeftRadius: vars.borderRadius.md,
    borderBottomLeftRadius: vars.borderRadius.md,
    borderRight: 'none',
  },
]);

export const addonRight = style([
  addon,
  {
    borderTopRightRadius: vars.borderRadius.md,
    borderBottomRightRadius: vars.borderRadius.md,
    borderLeft: 'none',
  },
]);

export const inputWithAddonLeft = style({
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
});

export const inputWithAddonRight = style({
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
});
