import React from 'react';
import clsx from 'clsx';
import * as styles from './Spinner.css';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SpinnerColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning';

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
}

export function Spinner({ size = 'md', color = 'primary', className }: SpinnerProps) {
  return (
    <div
      className={clsx(styles.spinner, styles.size[size], styles.color[color], className)}
      role="status"
      aria-label="Carregando"
    />
  );
}
