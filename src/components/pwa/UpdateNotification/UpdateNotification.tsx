/**
 * UpdateNotification Component
 * Notificação de atualização do service worker
 */

import React from 'react';
import clsx from 'clsx';
import { Button } from '../../../primitives/Button';
import { usePWA } from '../../../hooks/usePWA';
import * as styles from './UpdateNotification.css';

export interface UpdateNotificationProps {
  title?: string;
  description?: string;
  updateButtonText?: string;
  dismissButtonText?: string;
  onUpdate?: () => void;
  onDismiss?: () => void;
  className?: string;
  position?: 'top' | 'bottom';
}

/**
 * UpdateNotification - Notifica sobre atualizações disponíveis
 * @example
 * <UpdateNotification
 *   title="Nova versão disponível"
 *   onUpdate={() => console.log('Atualizando')}
 * />
 */
export function UpdateNotification({
  title = 'Nova versão disponível',
  description = 'Uma nova versão do app está pronta.',
  updateButtonText = 'Atualizar',
  dismissButtonText = 'Depois',
  onUpdate,
  onDismiss,
  className,
}: UpdateNotificationProps) {
  const { needsUpdate, update } = usePWA();
  const [dismissed, setDismissed] = React.useState(false);

  const handleUpdate = async () => {
    await update();
    onUpdate?.();
  };

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  if (!needsUpdate || dismissed) {
    return null;
  }

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.actions}>
        <Button variant="ghost" size="sm" onClick={handleDismiss}>
          {dismissButtonText}
        </Button>
        <Button variant="primary" size="sm" onClick={handleUpdate}>
          {updateButtonText}
        </Button>
      </div>
    </div>
  );
}
