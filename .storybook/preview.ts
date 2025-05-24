import type { Preview } from '@storybook/react'
import brincaTheme from './BrincaTheme'
import '../src/styles/index.css'

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                order: ['Pages', ['Home', 'Single'], 'Components'],
            },
        },
        docs: {
            theme: brincaTheme,
        },
        // actions: { argTypesRegex: '^on[A-Z].*' }, // Removed per Storybook 8 migration
        // To mock actions in play functions, use the `fn` function from '@storybook/test'.
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    tags: ['autodocs', 'autodocs'],
}

export default preview
