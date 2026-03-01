import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  display: 'inline-block',
  border: '3px solid transparent',
  borderTopColor: 'currentColor',
  borderRadius: '50%',
  animation: `${spin} 0.8s linear infinite`,
});

export const size = styleVariants({
  xs: { width: '16px', height: '16px' },
  sm: { width: '24px', height: '24px' },
  md: { width: '32px', height: '32px' },
  lg: { width: '48px', height: '48px' },
  xl: { width: '64px', height: '64px' },
});

export const color = styleVariants({
  primary: { borderTopColor: vars.color.primary[500] },
  secondary: { borderTopColor: vars.color.secondary[500] },
  success: { borderTopColor: vars.color.success[500] },
  error: { borderTopColor: vars.color.error[500] },
  warning: { borderTopColor: vars.color.warning[500] },
});
