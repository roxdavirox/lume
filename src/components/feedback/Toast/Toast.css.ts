import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

const slideIn = keyframes({
  '0%': { transform: 'translateX(100%)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 },
});

export const container = style({
  position: 'fixed',
  padding: vars.spacing.md,
  borderRadius: vars.borderRadius.lg,
  boxShadow: vars.shadow.xl,
  minWidth: '300px',
  maxWidth: '500px',
  zIndex: 1700,
  animation: `${slideIn} 0.3s ease`,
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.sm,
});

export const variant = styleVariants({
  success: { backgroundColor: vars.color.success[500], color: 'white' },
  error: { backgroundColor: vars.color.error[500], color: 'white' },
  warning: { backgroundColor: vars.color.warning[500], color: 'white' },
  info: { backgroundColor: vars.color.primary[500], color: 'white' },
});

export const position = styleVariants({
  'top-right': { top: vars.spacing.md, right: vars.spacing.md },
  'top-left': { top: vars.spacing.md, left: vars.spacing.md },
  'bottom-right': { bottom: vars.spacing.md, right: vars.spacing.md },
  'bottom-left': { bottom: vars.spacing.md, left: vars.spacing.md },
  'top-center': { top: vars.spacing.md, left: '50%', transform: 'translateX(-50%)' },
  'bottom-center': { bottom: vars.spacing.md, left: '50%', transform: 'translateX(-50%)' },
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
