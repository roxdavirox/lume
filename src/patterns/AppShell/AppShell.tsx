import React from 'react';
import clsx from 'clsx';
import * as styles from './AppShell.css';

export interface AppShellProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  mainClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}

export function AppShell({ header, footer, children, className }: AppShellProps) {
  return (
    <div className={clsx(styles.container, className)}>
      {header && <header className={styles.header}>{header}</header>}
      <main className={styles.main}>{children}</main>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  );
}
