/// <reference types="cypress" />

import { shouldRenderElements, testUrl } from '../../tests/global'

const types = [
    {
        title: 'Layout - Base',
        url: 'layout--base',
        tags: ['.layout'],
    },
]

types.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
    })
})
