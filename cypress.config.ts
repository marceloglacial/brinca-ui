import { defineConfig } from 'cypress'

export default defineConfig({
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    screenshotOnRunFailure: false,
    e2e: {
        baseUrl: 'http://localhost:6006',
        specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
        setupNodeEvents() {},
    },
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
            viteConfig: async () => {
                // Import JSON with the 'assert { type: "json" }' syntax for ESM compatibility
                const { default: viteConfig } = await import('./vite.config.ts')
                return typeof viteConfig === 'function' ? viteConfig() : viteConfig
            },
        },
        specPattern: 'src/components/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/component.ts',
    },
})
