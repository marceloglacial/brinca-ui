import '../src/styles/index.css'
export const parameters = {
    options: {
        storySort: {
            order: ['Pages', ['Home', 'Single'], 'Components'],
        },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
