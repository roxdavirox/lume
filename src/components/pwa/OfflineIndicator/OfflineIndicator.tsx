/**
 * OfflineIndicator Component
 * Indicador de status offline
 */

import React from 'react';
import clsx from 'clsx';
import { useNetworkStatus } from '../../../hooks/useNetworkStatus';
import * as styles from './OfflineIndicator.css';

export type OfflineIndicatorVariant = 'warning' | 'error' | 'info';

export interface OfflineIndicatorProps {
  message?: string;
  variant?: OfflineIndicatorVariant;
  showIcon?: boolean;
  className?: string;
}

/**
 * OfflineIndicator - Mostra quando usuário está offline
 * @example
 * <OfflineIndicator message="Sem conexão" />
 */
export function OfflineIndicator({
  message = 'Você está offline',
  variant = 'warning',
  showIcon = true,
  className,
}: OfflineIndicatorProps) {
  const { isOnline } = useNetworkStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div className={clsx(styles.container, styles.variant[variant], className)}>
      {showIcon && <span className={styles.icon}>📡</span>}
      <span>{message}</span>
    </div>
  );
}
