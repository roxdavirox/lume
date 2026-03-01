import React, { useEffect } from 'react';
import clsx from 'clsx';
import * as styles from './Toast.css';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center';

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  position?: ToastPosition;
  autoClose?: number;
  onClose?: () => void;
  className?: string;
}

export function Toast({
  message,
  variant = 'info',
  position = 'top-right',
  autoClose = 3000,
  onClose,
  className,
}: ToastProps) {
  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(onClose, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  return (
    <div
      className={clsx(
        styles.container,
        styles.variant[variant],
        styles.position[position],
        className
      )}
    >
      <div className={styles.content}>{message}</div>
      {onClose && (
        <button onClick={onClose} className={styles.closeButton} aria-label="Fechar">
          ✕
        </button>
      )}
    </div>
  );
}
