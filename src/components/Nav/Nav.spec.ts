import Nav from './Nav'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testContainer = () => {
    it(`Should render container`, () => {
        cy.get('.nav').should('exist').should('not.be.empty')
    })
}

const testClassName = () => {
    it(`Should render custom className`, () => {
        cy.get('.test').should('exist').should('not.be.empty')
    })
}

const testMenu = () => {
    it(`Should render menu`, () => {
        cy.get('.nav ul').should('exist')
        cy.get('.nav li').should('exist')
        cy.get('.nav__list').should('exist')
        cy.get('.nav__item').should('exist')
        cy.get('.nav__item a').should('exist')
        cy.get('.nav__item.test-menu-item').should('exist')
    })
}

describe('Nav - Top', () => {
    testBaseUrl('nav--top')
    testContainer()
    testClassName()
    testMenu()
})

describe('Nav - Bottom', () => {
    testBaseUrl('nav--bottom')
    testContainer()
    testClassName()
    testMenu()
})