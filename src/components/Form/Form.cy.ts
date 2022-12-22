/// <reference types="cypress" />

import { shouldRenderElements, testUrl } from '../../tests/global'

const types = [
    {
        title: 'Form - Container',
        url: 'form--container',
        tags: ['.form'],
    },
    {
        title: 'Form - Checkbox',
        url: 'form--checkbox',
        tags: ['.form__group', '.form__checkbox', '.form__label', 'input'],
    },
    {
        title: 'Form - Radio Button',
        url: 'form--radio-button',
        tags: ['.form__group', '.form__radio', '.form__label', 'input'],
    },
    {
        title: 'Form - Group',
        url: 'form--group',
        tags: ['.form__group'],
    },
    {
        title: 'Form - Text',
        url: 'form--text',
        tags: ['.form__input', 'input'],
    },
    {
        title: 'Form - Text Full Width',
        url: 'form--text-full-width',
        tags: ['.form__input', 'input', '.w-full'],
    },
    {
        title: 'Form - Label',
        url: 'form--label',
        tags: ['.form__label', 'label'],
    },
    {
        title: 'Form - Select',
        url: 'form--select',
        tags: ['.form__select', 'select', 'option'],
    },
    {
        title: 'Form - Textarea',
        url: 'form--textarea',
        tags: ['.form__textarea', 'textarea'],
    },
]

types.map((type) => {
    describe(type.title, () => {
        testUrl(type.url)
        shouldRenderElements(type.tags)
    })
})
