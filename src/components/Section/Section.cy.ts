/// <reference types="cypress" />

import { shouldRenderElements, testUrl } from '../../tests/global'

const sectionTypes = [
    {
        title: 'Section - Small Spacing',
        url: 'section--small-spacing',
        tags: ['.section', '.section--s'],
    },
    {
        title: 'Section - Default Spacing',
        url: 'section--default-spacing',
        tags: ['.section'],
    },
    {
        title: 'Section - Large Spacing',
        url: 'section--large-spacing',
        tags: ['.section', '.section--l'],
    },
    {
        title: 'Section - Extra Large Spacing',
        url: 'section--extra-large-spacing',
        tags: ['.section', '.section--xl'],
    },
]

sectionTypes.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
    })
})
