import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: {
        index:                               resolve(__dirname, 'src/index.ts'),
        theme:                               resolve(__dirname, 'src/theme/index.ts'),
        'primitives/Button':                 resolve(__dirname, 'src/primitives/Button/index.ts'),
        'primitives/Input':                  resolve(__dirname, 'src/primitives/Input/index.ts'),
        'primitives/Text':                   resolve(__dirname, 'src/primitives/Text/index.ts'),
        'primitives/Icon':                   resolve(__dirname, 'src/primitives/Icon/index.ts'),
        'primitives/Box':                    resolve(__dirname, 'src/primitives/Box/index.ts'),
        'primitives/Stack':                  resolve(__dirname, 'src/primitives/Stack/index.ts'),
        'components/feedback/Alert':         resolve(__dirname, 'src/components/feedback/Alert/index.ts'),
        'components/feedback/Modal':         resolve(__dirname, 'src/components/feedback/Modal/index.ts'),
        'components/feedback/Spinner':       resolve(__dirname, 'src/components/feedback/Spinner/index.ts'),
        'components/feedback/Toast':         resolve(__dirname, 'src/components/feedback/Toast/index.ts'),
        'components/forms/FormField':        resolve(__dirname, 'src/components/forms/FormField/index.ts'),
        'components/forms/SearchBar':        resolve(__dirname, 'src/components/forms/SearchBar/index.ts'),
        'components/pwa/InstallPrompt':      resolve(__dirname, 'src/components/pwa/InstallPrompt/index.ts'),
        'components/pwa/OfflineIndicator':   resolve(__dirname, 'src/components/pwa/OfflineIndicator/index.ts'),
        'components/pwa/UpdateNotification': resolve(__dirname, 'src/components/pwa/UpdateNotification/index.ts'),
        'patterns/AppShell':                 resolve(__dirname, 'src/patterns/AppShell/index.ts'),
        hooks:                               resolve(__dirname, 'src/hooks/index.ts'),
      },
      name: 'lume',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
        exports: 'named',
      },
    },
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2020',
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
});
