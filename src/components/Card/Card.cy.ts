/// <reference types="cypress" />

import { shouldRenderElements, shouldNotRenderElements, testUrl } from '../../tests/global'

const types = [
    {
        title: 'Card - Base',
        url: 'card--base',
        tags: ['.card', '.card__body'],
    },
    {
        title: 'Card - With Link',
        url: 'card--with-link',
        tags: ['.card', '.card__body', 'a'],
    },
    {
        title: 'Card - With Image',
        url: 'card--with-image',
        tags: ['.card', '.card__body', '.card__image', 'a'],
    },
    {
        title: 'Card - No Shadow',
        url: 'card--no-shadow',
        tags: ['.card', '.card__body', '.card__image', 'a'],
        notShow: ['.card--shadow'],
    },
    {
        title: 'Card - Square',
        url: 'card--square',
        tags: ['.card', '.card__body', '.card__image', 'a'],
        notShow: ['.card--rounded'],
    },
    {
        title: 'Card - With Footer',
        url: 'card--with-footer',
        tags: ['.card', '.card__body', '.card__image', '.card__footer'],
    },
]

types.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
        shouldNotRenderElements(type.notShow)
    })
})
