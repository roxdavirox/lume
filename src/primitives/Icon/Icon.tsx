/**
 * Icon Component
 * SVG icon wrapper
 */

/// <reference types="vite/client" />
import React from 'react';
import clsx from 'clsx';
import * as styles from './Icon.css';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

/**
 * Icon component - SVG wrapper
 * @example
 * <Icon size="md" aria-label="Close">
 *   <svg>...</svg>
 * </Icon>
 */
export function Icon({
  size = 'md',
  color,
  className,
  children,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = !ariaLabel,
}: IconProps) {
  return (
    <span
      className={clsx(styles.icon, styles.size[size], className)}
      style={{ color }}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      role={ariaLabel ? 'img' : undefined}
    >
      {children}
    </span>
  );
}
