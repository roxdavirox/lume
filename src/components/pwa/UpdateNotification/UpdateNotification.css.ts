/**
 * UpdateNotification Styles
 */

import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

const slideUp = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0)' },
});

export const container = style({
  position: 'fixed',
  bottom: vars.spacing.md,
  left: vars.spacing.md,
  right: vars.spacing.md,
  backgroundColor: vars.color.primary[500],
  color: 'white',
  padding: vars.spacing.md,
  borderRadius: vars.borderRadius.lg,
  boxShadow: vars.shadow.xl,
  zIndex: 1700,
  animation: `${slideUp} 0.3s ease`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
  maxWidth: '400px',

  '@media': {
    '(min-width: 768px)': {
      left: 'auto',
      right: vars.spacing.md,
    },
  },
});

export const content = style({
  flex: 1,
});

export const title = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing.xs,
});

export const description = style({
  fontSize: vars.fontSize.sm,
  opacity: 0.9,
});

export const actions = style({
  display: 'flex',
  gap: vars.spacing.sm,
  flexShrink: 0,
});
