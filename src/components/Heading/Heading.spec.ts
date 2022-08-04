import Heading from './Heading'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}

const testContainer = () => {
    it(`Should render container`, () => {
        cy.get('.heading').should('exist').should('not.be.empty')
    })
}

describe('Card - Base', () => {
    testBaseUrl('heading--base')
    testContainer()
})
