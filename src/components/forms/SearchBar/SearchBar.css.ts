import { style } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

export const container = style({
  position: 'relative',
  width: '100%',
});

export const input = style({
  width: '100%',
  paddingRight: '80px',
});

export const actions = style({
  position: 'absolute',
  right: vars.spacing.xs,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  gap: vars.spacing.xs,
});

export const clearButton = style({
  minWidth: '32px',
  padding: vars.spacing.xs,
});
