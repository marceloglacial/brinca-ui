const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: '@storybook/builder-vite',
    },

    async viteFinal(config) {
        return {
            ...config,
            resolve: {
                alias: [
                    {
                        find: '@functions',
                        replacement: path.resolve(
                            __dirname,
                            '../src/functions'
                        ),
                    },
                    {
                        find: '@components',
                        replacement: path.resolve(
                            __dirname,
                            '../src/components'
                        ),
                    },
                    {
                        find: '@hooks',
                        replacement: path.resolve(__dirname, '../src/hooks'),
                    },
                    {
                        find: '@styles',
                        replacement: path.resolve(__dirname, '../src/styles'),
                    },
                ],
            },
        }
    },
}
