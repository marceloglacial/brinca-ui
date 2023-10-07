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
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export default preview
