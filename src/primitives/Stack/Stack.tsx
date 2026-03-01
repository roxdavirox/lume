/**
 * Stack Component
 * Flexbox layout primitive
 */

import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import * as styles from './Stack.css';
import { spacing } from '../../theme/tokens';

type SpacingValue = keyof typeof spacing | 0;

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  direction?: 'vertical' | 'horizontal';
  gap?: SpacingValue;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  as?: React.ElementType;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

/**
 * Stack component - Flexbox layout
 * @example
 * <Stack direction="vertical" gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */
export function Stack({
  direction = 'vertical',
  gap = 'md',
  align,
  justify,
  wrap = false,
  as: Component = 'div',
  className,
  style,
  children,
}: StackProps) {
  const gapStyle: CSSProperties = {
    gap: spacing[gap],
  };

  return React.createElement(
    Component,
    {
      className: clsx(
        styles.stack,
        styles.direction[direction],
        align && styles.align[align],
        justify && styles.justify[justify],
        styles.wrap[wrap ? 'true' : 'false'],
        className
      ),
      style: { ...gapStyle, ...style },
    },
    children
  );
}
