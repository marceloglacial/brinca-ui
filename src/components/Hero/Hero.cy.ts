/// <reference types="cypress" />

import { shouldNotRenderElements, shouldRenderElements, testUrl } from '../../tests/global'

const types = [
    {
        title: 'Hero - Base',
        url: 'hero--base',
        tags: ['.hero', '.hero__image', '.hero__body'],
    },
    {
        title: 'Hero - No Shadow',
        url: 'hero--no-shadow',
        tags: ['.hero', '.hero__image', '.hero__body'],
        noTags: ['.hero--shadow'],
    },
    {
        title: 'Hero - Squared',
        url: 'hero--squared',
        tags: ['.hero', '.hero__image', '.hero__body'],
        noTags: ['.hero--rounded'],
    },
    {
        title: 'Hero - Reversed',
        url: 'hero--reversed',
        tags: ['.hero', '.hero__image', '.hero__body', '.hero--reversed'],
    },
]

types.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
        shouldNotRenderElements(type.noTags)
    })
})
