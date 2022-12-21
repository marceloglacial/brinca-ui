/// <reference types="cypress" />

const testButton = (dataTestId) => {
    const element = `[data-testid='${dataTestId}']`
    describe(`Button - ${dataTestId}`, () => {
        beforeEach(() => {
            cy.visit(`iframe.html?id=components-${dataTestId}`)
        })

        it(`should render ${dataTestId} element`, () => {
            cy.get(element).should('exist')
        })

        it(`should have ${dataTestId} text`, () => {
            cy.get(element).should('not.be.empty')
        })
    })
}

testButton('button--primary')
testButton('button--secondary')
testButton('button--full-width')
