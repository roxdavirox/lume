import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const slideUp = keyframes({
  '0%': { transform: 'translateY(20px)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
});

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: vars.spacing.md,
  animation: `${fadeIn} 0.2s ease`,
});

export const content = style({
  backgroundColor: vars.color.background,
  borderRadius: vars.borderRadius.lg,
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  maxHeight: '90vh',
  overflow: 'auto',
  animation: `${slideUp} 0.3s ease`,
  width: '100%',
});

export const size = styleVariants({
  sm: { maxWidth: '400px' },
  md: { maxWidth: '600px' },
  lg: { maxWidth: '800px' },
  xl: { maxWidth: '1000px' },
  full: { maxWidth: 'none', height: '90vh' },
});

export const header = style({
  padding: vars.spacing.lg,
  borderBottom: `1px solid ${vars.color.border}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const title = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.foreground,
});

export const closeButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: vars.spacing.sm,
  fontSize: vars.fontSize.xl,
  color: vars.color.gray[600],
  minWidth: '44px',
  minHeight: '44px',
});

export const body = style({
  padding: vars.spacing.lg,
});
