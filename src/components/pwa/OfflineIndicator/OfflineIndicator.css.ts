/**
 * OfflineIndicator Styles
 */

import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

const slideDown = keyframes({
  '0%': { transform: 'translateY(-100%)' },
  '100%': { transform: 'translateY(0)' },
});

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: vars.color.warning[500],
  color: 'white',
  padding: vars.spacing.sm,
  textAlign: 'center',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  zIndex: 1700,
  animation: `${slideDown} 0.3s ease`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xs,
});

export const variant = styleVariants({
  warning: {
    backgroundColor: vars.color.warning[500],
  },
  error: {
    backgroundColor: vars.color.error[500],
  },
  info: {
    backgroundColor: vars.color.primary[500],
  },
});

export const icon = style({
  fontSize: vars.fontSize.lg,
});
