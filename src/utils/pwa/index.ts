/**
 * PWA Utilities
 */

interface ExtendedNavigator extends Navigator {
  standalone?: boolean;
}

interface NavigatorConnection {
  type?:
    | 'bluetooth'
    | 'cellular'
    | 'ethernet'
    | 'mixed'
    | 'none'
    | 'other'
    | 'unknown'
    | 'wifi'
    | 'wimax';
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
  addEventListener: (
    type: string,
    listener: EventListener,
    options?: boolean | AddEventListenerOptions
  ) => void;
  removeEventListener: (
    type: string,
    listener: EventListener,
    options?: boolean | EventListenerOptions
  ) => void;
}

interface ExtendedNavigatorWithConnection extends ExtendedNavigator {
  connection?: NavigatorConnection;
  mozConnection?: NavigatorConnection;
  webkitConnection?: NavigatorConnection;
}

/**
 * Detecta se o app está instalado como PWA
 */
export function isPWAInstalled(): boolean {
  if (typeof window === 'undefined') return false;

  // Display mode check
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return true;
  }

  // Navigator check (iOS)
  const extendedNavigator = navigator as ExtendedNavigator;
  if (extendedNavigator.standalone === true) {
    return true;
  }

  // Check for Android TWA
  if (document.referrer.includes('android-app://')) {
    return true;
  }

  return false;
}

/**
 * Detecta se o browser suporta PWA
 */
export function isPWASupported(): boolean {
  if (typeof window === 'undefined') return false;

  return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
}

/**
 * Detecta se está online
 */
export function isOnline(): boolean {
  if (typeof window === 'undefined') return true;
  return navigator.onLine;
}

/**
 * Detecta tipo de conexão
 */
export function getConnectionType(): string | undefined {
  if (typeof window === 'undefined') return undefined;

  const extendedNavigator = navigator as ExtendedNavigatorWithConnection;
  const connection =
    extendedNavigator.connection ||
    extendedNavigator.mozConnection ||
    extendedNavigator.webkitConnection;

  return connection?.effectiveType;
}

/**
 * Registra service worker
 */
export async function registerServiceWorker(
  swUrl: string = '/sw.js'
): Promise<ServiceWorkerRegistration | null> {
  if (!isPWASupported()) {
    console.warn('Service Worker not supported');
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register(swUrl);
    console.log('Service Worker registered:', registration);
    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return null;
  }
}

/**
 * Desregistra service worker
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (!isPWASupported()) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      await registration.unregister();
      console.log('Service Worker unregistered');
      return true;
    }
    return false;
  } catch (error) {
    console.error('Service Worker unregister failed:', error);
    return false;
  }
}

/**
 * Força atualização do service worker
 */
export async function updateServiceWorker(): Promise<void> {
  if (!isPWASupported()) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      await registration.update();
      console.log('Service Worker updated');
    }
  } catch (error) {
    console.error('Service Worker update failed:', error);
  }
}

/**
 * Pede permissão de notificação
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    return 'granted';
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission;
  }

  return Notification.permission;
}

/**
 * Envia notificação
 */
export async function sendNotification(
  title: string,
  options?: NotificationOptions
): Promise<Notification | null> {
  const permission = await requestNotificationPermission();

  if (permission !== 'granted') {
    console.warn('Notification permission not granted');
    return null;
  }

  try {
    const notification = new Notification(title, options);
    return notification;
  } catch (error) {
    console.error('Failed to send notification:', error);
    return null;
  }
}
