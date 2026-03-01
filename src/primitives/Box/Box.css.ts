/**
 * Box Styles - Vanilla Extract
 * Layout primitive
 */

import { styleVariants } from '@vanilla-extract/css';

export const display = styleVariants({
  block: { display: 'block' },
  flex: { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  grid: { display: 'grid' },
  'inline-block': { display: 'inline-block' },
  inline: { display: 'inline' },
  none: { display: 'none' },
});
