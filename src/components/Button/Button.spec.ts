import Button from './Button'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testContainer = () => {
    it(`Should render button`, () => {
        cy.get('.btn').should('exist')
    })
}
const testType = (type: string = 'primary') => {
    it(`Should render ${type} type`, () => {
        cy.get(`.btn--${type}`).should('exist')
    })
}

const testWidth = () => {
    it(`Should render a full width button`, () => {
        cy.get(`.w-full`).should('exist')
    })
}

describe('Primary', () => {
    testBaseUrl('button--primary')
    testContainer()
    testType('primary')
})

describe('Secondary', () => {
    testBaseUrl('button--secondary')
    testContainer()
    testType('secondary')
})

describe('Full Width', () => {
    testBaseUrl('button--full-width')
    testContainer()
    testType('primary')
    testWidth()
})
