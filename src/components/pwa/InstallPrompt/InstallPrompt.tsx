/**
 * InstallPrompt Component
 * Prompt customizável para instalação PWA
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Button } from '../../../primitives/Button';
import { usePWA } from '../../../hooks/usePWA';
import * as styles from './InstallPrompt.css';

export type InstallPromptPosition = 'bottom-right' | 'bottom-left' | 'bottom-center';

export interface InstallPromptProps {
  title?: string;
  description?: string;
  icon?: string;
  position?: InstallPromptPosition;
  installButtonText?: string;
  dismissButtonText?: string;
  autoDismissDelay?: number;
  onInstall?: () => void;
  onDismiss?: () => void;
  className?: string;
}

/**
 * InstallPrompt - Prompt para instalação PWA
 * @example
 * <InstallPrompt
 *   title="Instalar App"
 *   description="Adicione à tela inicial"
 *   onInstall={() => console.log('Instalado')}
 * />
 */
export function InstallPrompt({
  title = 'Instalar App',
  description = 'Adicione este app à sua tela inicial para acesso rápido.',
  icon = '/icon-192.png',
  position = 'bottom-right',
  installButtonText = 'Instalar',
  dismissButtonText = 'Agora não',
  autoDismissDelay,
  onInstall,
  onDismiss,
  className,
}: InstallPromptProps) {
  const { canInstall, install } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = localStorage.getItem('pwa-install-dismissed');
    if (wasDismissed) {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (autoDismissDelay && canInstall && !dismissed) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoDismissDelay);

      return () => clearTimeout(timer);
    }
  }, [autoDismissDelay, canInstall, dismissed]);

  const handleInstall = async () => {
    await install();
    onInstall?.();
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('pwa-install-dismissed', 'true');
    onDismiss?.();
  };

  if (!canInstall || dismissed) {
    return null;
  }

  return (
    <div className={clsx(styles.container, styles.position[position], className)}>
      <div className={styles.header}>
        {icon && <img src={icon} alt="" className={styles.icon} />}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <Button variant="primary" onClick={handleInstall} fullWidth>
          {installButtonText}
        </Button>
        <Button variant="ghost" onClick={handleDismiss}>
          {dismissButtonText}
        </Button>
      </div>
    </div>
  );
}
