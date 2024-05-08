export default [
    {
        root: true,
        env: { browser: true, es2020: true },
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:react-hooks/recommended',
            'plugin:storybook/recommended',
            'prettier',
        ],
        ignorePatterns: ['dist', 'docs', '.cypress.*', '.stories.ts*', 'node_modules'],
        parser: '@typescript-eslint/parser',
        plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier'],
        rules: {
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prettier/prettier': ['error'],
            'no-unused-vars': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            'no-console': [
                'error',
                {
                    allow: ['warn', 'error'],
                },
            ],
        },
    },
]
