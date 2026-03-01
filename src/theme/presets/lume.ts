/**
 * Lume Default Theme Preset
 * Default theme preset for Lume
 */

import {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadii,
  shadows,
  transitions,
} from '../tokens';

export interface ThemeConfig {
  name: string;
  colors: typeof colors;
  spacing: typeof spacing;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  borderRadii: typeof borderRadii;
  shadows: typeof shadows;
  transitions: typeof transitions;
}

export const lumeTheme: ThemeConfig = {
  name: 'lume',
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadii,
  shadows,
  transitions,
};
