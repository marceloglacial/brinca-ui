import Layout from './Layout'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=layouts-default--${component}`)
    })
}

const testContainer = () => {
    it(`Should render container`, () => {
        cy.get('.page-layout').should('exist').should('not.be.empty')
    })
}

const testWidth = () => {
    it(`Should have the right width`, () => {
        cy.get('.max-w-screen-lg').should('exist')
    })
}

const testMargins = () => {
    it(`Should be placed on the center of the screen`, () => {
        cy.get('.mx-auto').should('exist')
    })
}

describe('Card - Base', () => {
    testBaseUrl('default')
    testContainer()
    testWidth()
    testMargins()
})
