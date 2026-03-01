/**
 * Icon Styles - Vanilla Extract
 */

import { style, styleVariants, globalStyle } from '@vanilla-extract/css';

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  lineHeight: 1,
});

globalStyle(`${icon} > svg`, {
  width: '100%',
  height: '100%',
  fill: 'currentColor',
});

export const size = styleVariants({
  xs: {
    width: '0.75rem',
    height: '0.75rem',
  },
  sm: {
    width: '1rem',
    height: '1rem',
  },
  md: {
    width: '1.5rem',
    height: '1.5rem',
  },
  lg: {
    width: '2rem',
    height: '2rem',
  },
  xl: {
    width: '2.5rem',
    height: '2.5rem',
  },
});
