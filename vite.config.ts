import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import { UserConfigExport } from 'vite'
import pkg from './package.json' assert { type: 'json' }
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = async (): Promise<UserConfigExport> => {
    const formattedName = pkg.name.match(/[^/]+$/)?.[0] ?? pkg.name

    return defineConfig({
        plugins: [
            react(),
            dts({
                insertTypesEntry: true,
            }),
        ],
        css: {
            postcss: {
                plugins: [tailwindcss],
            },
        },
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: formattedName,
                formats: ['es', 'umd'],
                fileName: (format) => `${formattedName}.${format}.js`,
            },
            rollupOptions: {
                external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
                output: {
                    globals: {
                        react: 'React',
                        'react/jsx-runtime': 'react/jsx-runtime',
                        'react-dom': 'ReactDOM',
                        tailwindcss: 'tailwindcss',
                    },
                },
            },
        },
    })
}
// https://vitejs.dev/config/
export default app
