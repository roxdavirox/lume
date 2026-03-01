import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

export const container = style({
  padding: vars.spacing.md,
  borderRadius: vars.borderRadius.md,
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.sm,
  border: '1px solid transparent',
});

export const variant = styleVariants({
  info: {
    backgroundColor: vars.color.primary[50],
    borderColor: vars.color.primary[200],
    color: vars.color.primary[900],
  },
  success: {
    backgroundColor: vars.color.success[50],
    borderColor: vars.color.success[200],
    color: vars.color.success[900],
  },
  warning: {
    backgroundColor: vars.color.warning[50],
    borderColor: vars.color.warning[200],
    color: vars.color.warning[900],
  },
  error: {
    backgroundColor: vars.color.error[50],
    borderColor: vars.color.error[200],
    color: vars.color.error[900],
  },
});

export const content = style({
  flex: 1,
});

export const closeButton = style({
  background: 'transparent',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  padding: vars.spacing.xs,
  fontSize: vars.fontSize.lg,
});
