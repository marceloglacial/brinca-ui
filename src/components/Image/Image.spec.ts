import Image from './Image'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testContainer = () => {
    it(`Should render button`, () => {
        cy.get('.image').should('exist')
    })
}

describe('Button - Primary', () => {
    testBaseUrl('button--primary')
    testContainer()
})
