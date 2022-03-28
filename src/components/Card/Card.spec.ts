import Card from './Card'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testContainer = () => {
    it(`Should render container`, () => {
        cy.get('.card').should('exist')
    })
}
const testHeader = () => {
    it(`Should render header`, () => {
        cy.get('.card__header').should('exist').should('not.be.empty')
    })
}
const testBody = () => {
    it(`Should render body`, () => {
        cy.get('.card__body').should('exist').should('not.be.empty')
    })
}

const testContent = () => {
    it(`Should render content`, () => {
        cy.get('.card__content').should('exist').should('not.be.empty')
    })
}
const testImage = () => {
    it(`Should render figure`, () => {
        cy.get('.card__figure').should('exist')
    })
    it(`Should render image`, () => {
        cy.get('.card__image').should('exist')
    })
}

const testFooter = () => {
    it(`Should render footer`, () => {
        cy.get('.card__footer').should('exist').should('not.be.empty')
    })
}

describe('Base', () => {
    testBaseUrl('card--base')
    testContainer()
    testHeader()
    testBody()
    testContent()
})

describe('With Image', () => {
    testBaseUrl('card--with-image')
    testContainer()
    testHeader()
    testBody()
    testContent()
    testImage()
})

describe('With Button', () => {
    testBaseUrl('card--with-button')
    testContainer()
    testHeader()
    testBody()
    testContent()
    testImage()
    testFooter()
})
