import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      insertTypesEntry: true,
      include: ['src/components/**/*.jsx', 'src/icons/**/*.jsx', 'src/lib/**/*.js'],
      exclude: ['src/App.jsx', 'src/main.jsx']
    })
  ],
  publicDir: false, // Don't copy public assets for library build
  build: {
    lib: {
      entry: {
        index: resolve(process.cwd(), 'src/lib/index.js'),
        chrome: resolve(process.cwd(), 'src/lib/chrome.js'),
        mainContent: resolve(process.cwd(), 'src/lib/mainContent.js'),
        icons: resolve(process.cwd(), 'src/lib/icons.js'),
        components: resolve(process.cwd(), 'src/lib/components.js')
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName}.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'styled-components',
        '@zendeskgarden/react-avatars',
        '@zendeskgarden/react-buttons',
        '@zendeskgarden/react-forms',
        '@zendeskgarden/react-tabs',
        '@zendeskgarden/react-theming',
        '@zendeskgarden/react-tooltips',
        '@zendeskgarden/react-typography',
        '@zendeskgarden/svg-icons'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        }
      }
    },
    sourcemap: true
  }
})
