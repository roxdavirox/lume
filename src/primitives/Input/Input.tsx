/**
 * Input Component
 * Mobile First, Touch-Friendly, Accessible
 */

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import * as styles from './Input.css';

export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: InputState;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
}

/**
 * Input component with validation states and addons
 * @example
 * <Input type="text" placeholder="Enter text" />
 * <Input state="error" placeholder="Invalid email" />
 * <Input addonLeft="https://" placeholder="website.com" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ state = 'default', addonLeft, addonRight, className, ...props }, ref) => {
    const inputElement = (
      <input
        ref={ref}
        className={clsx(
          styles.input,
          styles.state[state],
          addonLeft && styles.inputWithAddonLeft,
          addonRight && styles.inputWithAddonRight,
          className
        )}
        {...props}
      />
    );

    if (addonLeft || addonRight) {
      return (
        <div className={styles.container}>
          {addonLeft && <span className={styles.addonLeft}>{addonLeft}</span>}
          {inputElement}
          {addonRight && <span className={styles.addonRight}>{addonRight}</span>}
        </div>
      );
    }

    return inputElement;
  }
);

Input.displayName = 'Input';
