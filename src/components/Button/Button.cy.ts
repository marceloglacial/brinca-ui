/// <reference types="cypress" />

import { shouldRenderElements, testUrl } from '../../tests/global'

const buttonTypes = [
    {
        title: 'Button - Primary',
        url: 'button--primary',
        tags: ['.button', '.button--primary'],
    },
    {
        title: 'Button - Secondary',
        url: 'button--secondary',
        tags: ['.button', '.button--secondary'],
    },
    {
        title: 'Button - Full Width',
        url: 'button--full-width',
        tags: ['.button', '.button--full-width'],
    },
    {
        title: 'Button - Disabled',
        url: 'button--disabled',
        tags: ['.button', '.button--disabled'],
    },
]

buttonTypes.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
    })
})
