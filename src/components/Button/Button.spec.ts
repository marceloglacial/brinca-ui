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

const testClassName = (classname: string) => {
    it(`Should have ${classname} classname`, () => {
        cy.get(classname).should('exist')
    })
}

const testWidth = () => {
    it(`Should render a full width button`, () => {
        cy.get(`.w-full`).should('exist')
    })
}

describe('Button - Primary', () => {
    testBaseUrl('button--primary')
    testContainer()
    testType('primary')
})

describe('Button - Secondary', () => {
    testBaseUrl('button--secondary')
    testContainer()
    testType('secondary')
})
describe('Button - As Link', () => {
    testBaseUrl('button--as-link')
    testContainer()
    testClassName('a')
})

describe('Button - Full Width', () => {
    testBaseUrl('button--full-width')
    testContainer()
    testType('primary')
    testWidth()
})
