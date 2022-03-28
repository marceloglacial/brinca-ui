import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'brinca-ui',
        },
        rollupOptions: {
            plugins: [
                typescript({
                    rootDir: path.resolve(__dirname, 'src'),
                    noEmit: false,
                    emitDeclarationOnly: true,
                    declaration: true,
                    declarationDir: path.resolve(__dirname, 'dist'),
                    exclude: ['**/src/**/*.stories.*', '**/src/**/*.spec.*'],
                }),
            ],
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'style',
                },
            },
        },
    },
    optimizeDeps: {
        exclude: ['brinca-ui'],
    },
})
