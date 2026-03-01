import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/cssVars.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  backgroundColor: vars.color.background,
  borderBottom: `1px solid ${vars.color.border}`,
  padding: vars.spacing.md,
});

export const main = style({
  flex: 1,
  padding: vars.spacing.md,
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
});

export const footer = style({
  borderTop: `1px solid ${vars.color.border}`,
  padding: vars.spacing.md,
  textAlign: 'center',
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[600],
});
