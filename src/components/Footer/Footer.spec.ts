import Footer from './Footer'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testContainer = () => {
    it(`Should render container`, () => {
        cy.get('.footer').should('exist').should('not.be.empty')
    })
}

const testClassName = () => {
    it(`Should render custom className`, () => {
        cy.get('.test').should('exist').should('not.be.empty')
    })
}

describe('Footer - Base', () => {
    testBaseUrl('footer--base')
    testContainer()
    testClassName()
})
