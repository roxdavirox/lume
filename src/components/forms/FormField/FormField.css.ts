import { style } from '@vanilla-extract/css';
import { vars } from '../../../theme/cssVars.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  width: '100%',
});

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.foreground,
});

export const required = style({
  color: vars.color.error[500],
  marginLeft: vars.spacing.xs,
});

export const helperText = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.gray[600],
});

export const errorText = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.error[500],
});
