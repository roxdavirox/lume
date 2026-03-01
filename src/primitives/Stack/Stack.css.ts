/**
 * Stack Styles - Vanilla Extract
 */

import { style, styleVariants } from '@vanilla-extract/css';

export const stack = style({
  display: 'flex',
});

export const direction = styleVariants({
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
  },
});

export const align = styleVariants({
  start: { alignItems: 'flex-start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
  stretch: { alignItems: 'stretch' },
  baseline: { alignItems: 'baseline' },
});

export const justify = styleVariants({
  start: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  end: { justifyContent: 'flex-end' },
  between: { justifyContent: 'space-between' },
  around: { justifyContent: 'space-around' },
  evenly: { justifyContent: 'space-evenly' },
});

export const wrap = styleVariants({
  true: { flexWrap: 'wrap' },
  false: { flexWrap: 'nowrap' },
});
