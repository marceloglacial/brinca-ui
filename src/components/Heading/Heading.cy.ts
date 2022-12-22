/// <reference types="cypress" />

import { shouldRenderElements, testUrl } from '../../tests/global'

const types = [
    {
        title: 'Heading',
        url: 'heading--default',
        tags: ['.heading'],
    },
]

types.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
    })
})
