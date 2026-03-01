/**
 * InstallPrompt Styles
 */

import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

export const container = style({
  position: 'fixed',
  bottom: vars.spacing.md,
  left: vars.spacing.md,
  right: vars.spacing.md,
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.borderRadius.lg,
  padding: vars.spacing.md,
  boxShadow: vars.shadow.xl,
  zIndex: 1500,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  maxWidth: '400px',

  '@media': {
    '(min-width: 768px)': {
      left: 'auto',
      right: vars.spacing.md,
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.sm,
});

export const icon = style({
  flexShrink: 0,
  width: '48px',
  height: '48px',
  borderRadius: vars.borderRadius.md,
  overflow: 'hidden',
});

export const content = style({
  flex: 1,
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
  marginBottom: vars.spacing.xs,
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[600],
});

export const actions = style({
  display: 'flex',
  gap: vars.spacing.sm,
  marginTop: vars.spacing.sm,
});

export const position = styleVariants({
  'bottom-right': {
    bottom: vars.spacing.md,
    right: vars.spacing.md,
    left: 'auto',
  },
  'bottom-left': {
    bottom: vars.spacing.md,
    left: vars.spacing.md,
    right: 'auto',
  },
  'bottom-center': {
    bottom: vars.spacing.md,
    left: '50%',
    transform: 'translateX(-50%)',
    right: 'auto',
  },
});
