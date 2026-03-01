/**
 * createTheme - Helper para criar temas customizados
 */

import type { ThemeConfig } from './presets/lume';
import { spacing, fontSizes, fontWeights, borderRadii, shadows, transitions } from './tokens';

export interface CreateThemeOptions {
  name: string;
  colors: ThemeConfig['colors'];
  spacing?: Partial<typeof spacing>;
  fontSizes?: Partial<typeof fontSizes>;
  fontWeights?: Partial<typeof fontWeights>;
  borderRadii?: Partial<typeof borderRadii>;
  shadows?: Partial<typeof shadows>;
  transitions?: Partial<typeof transitions>;
}

/**
 * Cria um tema customizado com opções parciais
 * @example
 * const myTheme = createTheme({
 *   name: 'my-brand',
 *   colors: {
 *     primary: { ... },
 *     // ...
 *   }
 * });
 */
export function createTheme(options: CreateThemeOptions): ThemeConfig {
  return {
    name: options.name,
    colors: options.colors,
    spacing: { ...spacing, ...options.spacing },
    fontSizes: { ...fontSizes, ...options.fontSizes },
    fontWeights: { ...fontWeights, ...options.fontWeights },
    borderRadii: { ...borderRadii, ...options.borderRadii },
    shadows: { ...shadows, ...options.shadows },
    transitions: { ...transitions, ...options.transitions },
  };
}

/**
 * Extende um tema existente com overrides
 * @example
 * const myTheme = extendTheme(lumeTheme, {
 *   colors: {
 *     primary: { ...lumeTheme.colors.primary, 500: '#custom' }
 *   }
 * });
 */
export function extendTheme(
  baseTheme: ThemeConfig,
  overrides: Partial<Omit<CreateThemeOptions, 'name'>> & { name?: string }
): ThemeConfig {
  return {
    name: overrides.name || baseTheme.name,
    colors: overrides.colors || baseTheme.colors,
    spacing: { ...baseTheme.spacing, ...overrides.spacing },
    fontSizes: { ...baseTheme.fontSizes, ...overrides.fontSizes },
    fontWeights: { ...baseTheme.fontWeights, ...overrides.fontWeights },
    borderRadii: { ...baseTheme.borderRadii, ...overrides.borderRadii },
    shadows: { ...baseTheme.shadows, ...overrides.shadows },
    transitions: { ...baseTheme.transitions, ...overrides.transitions },
  };
}
