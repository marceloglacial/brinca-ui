/// <reference types="cypress" />

import { shouldRenderElements, testUrl } from '../../tests/global'

const linkTypes = [
    {
        title: 'Link - Default',
        url: 'link--default',
        tags: ['.link'],
    },
    {
        title: 'Link - Primary',
        url: 'link--primary',
        tags: ['.link', '.link--primary'],
    },
    {
        title: 'Link - Secondary',
        url: 'link--secondary',
        tags: ['.link', '.link--secondary'],
    },
    {
        title: 'Link - Full Width',
        url: 'link--full-width',
        tags: ['.link', '.link--full'],
    },
]

linkTypes.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
    })
})
