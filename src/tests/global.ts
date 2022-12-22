/// <reference types="cypress" />

export const testUrl = (page) => {
    beforeEach(() => {
        cy.visit(`iframe.html?id=components-${page}`)
    })
}
export const shouldRenderElements = (elements) => {
    elements.map((element) =>
        it(`should render ${element}`, () => {
            cy.get(`${element}`).should('exist')
        })
    )
}

export const shouldNotRenderElements = (elements) => {
    elements?.map((element) =>
        it(`should not render ${element}`, () => {
            cy.get(`${element}`).should('not.exist')
        })
    )
}
