import React from 'react';
import clsx from 'clsx';
import * as styles from './Alert.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  dismissible?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Alert({ variant = 'info', dismissible, onClose, children, className }: AlertProps) {
  return (
    <div className={clsx(styles.container, styles.variant[variant], className)}>
      <div className={styles.content}>{children}</div>
      {dismissible && onClose && (
        <button onClick={onClose} className={styles.closeButton} aria-label="Fechar">
          ✕
        </button>
      )}
    </div>
  );
}
