/// <reference types="cypress" />

const testCardUrl = (page) => {
    beforeEach(() => {
        cy.visit(`iframe.html?id=components-card--${page}`)
    })
}
const testCardElement = (element) => {
    it(`should render ${element}`, () => {
        cy.get(`[data-testid='card-${element}']`).should('exist')
    })
}

describe(`Card - Base`, () => {
    testCardUrl('base')
    testCardElement('body')
})

describe(`Card - With Link`, () => {
    testCardUrl('with-link')
    testCardElement('body')
})

describe(`Card - With Image`, () => {
    testCardUrl('with-image')
    testCardElement('body')
    testCardElement('image')
})

describe(`Card - No Shadow`, () => {
    testCardUrl('no-shadow')
    testCardElement('body')
    it(`should not display a shadow`, () => {
        cy.get(`.card--shadow`).should('not.exist')
    })
})

describe(`Card - Square`, () => {
    testCardUrl('square')
    testCardElement('body')
    it(`should not display a rounded border`, () => {
        cy.get(`.card--rounded`).should('not.exist')
    })
})

describe(`Card - With Footer`, () => {
    testCardUrl('with-footer')
    testCardElement('body')
    testCardElement('image')
    testCardElement('footer')
})

describe(`Card - Business Card`, () => {
    testCardUrl('business-card')
    testCardElement('-business-card')
})
