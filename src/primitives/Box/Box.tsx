/**
 * Box Component
 * Layout primitive with polymorphic as prop
 */

import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import * as styles from './Box.css';
import { spacing } from '../../theme/tokens';

type SpacingValue = keyof typeof spacing | 0;

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  ref?: React.Ref<HTMLElement>;
  display?: 'block' | 'flex' | 'inline-flex' | 'grid' | 'inline-block' | 'inline' | 'none';
  padding?: SpacingValue;
  paddingX?: SpacingValue;
  paddingY?: SpacingValue;
  paddingTop?: SpacingValue;
  paddingRight?: SpacingValue;
  paddingBottom?: SpacingValue;
  paddingLeft?: SpacingValue;
  margin?: SpacingValue;
  marginX?: SpacingValue;
  marginY?: SpacingValue;
  marginTop?: SpacingValue;
  marginRight?: SpacingValue;
  marginBottom?: SpacingValue;
  marginLeft?: SpacingValue;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

/**
 * Box component - Layout primitive
 * @example
 * <Box padding="md">Content</Box>
 * <Box display="flex" as="section">Flex container</Box>
 */
export function Box({
  as: Component = 'div',
  display = 'block',
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  className,
  style,
  children,
  ...props
}: BoxProps) {
  const spacingStyle: CSSProperties = {};

  // Padding
  if (padding !== undefined) {
    spacingStyle.padding = spacing[padding];
  }
  if (paddingX !== undefined) {
    spacingStyle.paddingLeft = spacing[paddingX];
    spacingStyle.paddingRight = spacing[paddingX];
  }
  if (paddingY !== undefined) {
    spacingStyle.paddingTop = spacing[paddingY];
    spacingStyle.paddingBottom = spacing[paddingY];
  }
  if (paddingTop !== undefined) spacingStyle.paddingTop = spacing[paddingTop];
  if (paddingRight !== undefined) spacingStyle.paddingRight = spacing[paddingRight];
  if (paddingBottom !== undefined) spacingStyle.paddingBottom = spacing[paddingBottom];
  if (paddingLeft !== undefined) spacingStyle.paddingLeft = spacing[paddingLeft];

  // Margin
  if (margin !== undefined) {
    spacingStyle.margin = spacing[margin];
  }
  if (marginX !== undefined) {
    spacingStyle.marginLeft = spacing[marginX];
    spacingStyle.marginRight = spacing[marginX];
  }
  if (marginY !== undefined) {
    spacingStyle.marginTop = spacing[marginY];
    spacingStyle.marginBottom = spacing[marginY];
  }
  if (marginTop !== undefined) spacingStyle.marginTop = spacing[marginTop];
  if (marginRight !== undefined) spacingStyle.marginRight = spacing[marginRight];
  if (marginBottom !== undefined) spacingStyle.marginBottom = spacing[marginBottom];
  if (marginLeft !== undefined) spacingStyle.marginLeft = spacing[marginLeft];

  return React.createElement(
    Component,
    {
      className: clsx(styles.display[display], className),
      style: { ...spacingStyle, ...style },
      ...props,
    },
    children
  );
}
