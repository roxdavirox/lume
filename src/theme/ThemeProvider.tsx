/**
 * ThemeProvider - Provedor de tema com dark mode
 */

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import type { ThemeConfig } from './presets/lume';
import { lightTheme, darkTheme } from './cssVars.css';

export type ThemeMode = 'light' | 'dark';

export type ThemeStorageKey = string;

export interface ThemeContextValue {
  theme: ThemeConfig;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme: ThemeConfig;
  defaultMode?: ThemeMode;
  storageKey?: ThemeStorageKey;
}

/**
 * ThemeProvider - Gerencia tema e dark mode
 * @example
 * <ThemeProvider theme={lumeTheme} defaultMode="light">
 *   <App />
 * </ThemeProvider>
 */
export function ThemeProvider({
  children,
  theme,
  defaultMode = 'light',
  storageKey = 'lume-theme-mode',
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultMode;

    // Tenta pegar do localStorage
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    // Tenta pegar da preferência do sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return defaultMode;
  });

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newMode);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  // Aplica classe do tema no body
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    root.classList.remove(lightTheme, darkTheme);
    root.classList.add(mode === 'light' ? lightTheme : darkTheme);
  }, [mode]);

  // Detecta mudanças na preferência do sistema
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(storageKey);
      if (!stored) {
        // Se não tem preferência salva, segue o sistema
        setModeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [storageKey]);

  const value = useMemo(
    () => ({
      theme,
      mode,
      setMode,
      toggleMode,
    }),
    [theme, mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * useTheme - Hook para acessar tema e controles
 * @example
 * const { theme, mode, toggleMode } = useTheme();
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
