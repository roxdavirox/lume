/**
 * Text Component
 * Typography primitive with variants
 */

import React from 'react';
import clsx from 'clsx';
import * as styles from './Text.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'small';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: 'foreground' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  truncate?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  children: React.ReactNode;
}

/**
 * Text component with typography variants
 * @example
 * <Text variant="h1">Heading</Text>
 * <Text variant="body" color="muted">Body text</Text>
 * <Text variant="caption" truncate>Long text...</Text>
 */
export function Text({
  variant = 'body',
  weight,
  align,
  color = 'foreground',
  truncate = false,
  as,
  className,
  children,
}: TextProps) {
  const Component = as || (variant.startsWith('h') ? variant : 'p');

  return React.createElement(
    Component,
    {
      className: clsx(
        styles.variant[variant],
        weight && styles.weight[weight],
        align && styles.align[align],
        styles.color[color],
        styles.truncate[truncate ? 'true' : 'false'],
        className
      ),
    },
    children
  );
}
