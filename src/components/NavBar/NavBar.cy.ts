/// <reference types="cypress" />

import { shouldRenderElements, testUrl } from '../../tests/global'

const navbarTypes = [
    {
        title: 'Navbar - Top',
        url: 'navbar--top',
        tags: [
            '.navbar',
            '.navbar--top',
            'nav',
            '.navbar__brand',
            '.navbar__items',
            '.navbar__button',
        ],
    },
    {
        title: 'Navbar - Bottom',
        url: 'navbar--bottom',
        tags: ['.navbar', '.navbar--bottom', 'nav', '.navbar__brand', '.navbar__items'],
    },
]

navbarTypes.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
    })
})
