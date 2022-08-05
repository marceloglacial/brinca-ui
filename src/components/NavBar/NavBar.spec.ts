import NavBar from './NavBar'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testContainer = (variant: string) => {
    it(`Should render ${variant} container`, () => {
        cy.get(`.navbar.navbar__${variant}`)
            .should('exist')
            .should('not.be.empty')
    })
}

const testClassName = () => {
    it(`Should render custom className`, () => {
        cy.get('.test').should('exist').should('not.be.empty')
    })
}

const testBrand = () => {
    it(`Should render Brand`, () => {
        cy.get('.navbar__brand').should('exist')
    })
}

const testContent = () => {
    it(`Should render Content`, () => {
        cy.get('.navbar__content').should('exist')
    })
}

const testSocial = () => {
    it(`Should render Social`, () => {
        cy.get('.navbar__social').should('exist')
    })
}

describe('Nav - Top', () => {
    testBaseUrl('navbar--top')
    testClassName()
    testContainer('top')
    testBrand()
    testContent()
})

describe('Nav - Bottom', () => {
    testBaseUrl('navbar--bottom')
    testContainer('bottom')
    testSocial()
    testContent()
})
