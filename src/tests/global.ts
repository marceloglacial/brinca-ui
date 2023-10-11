/// <reference types="cypress" />

export const testUrl = (page: string) => {
    beforeEach(() => {
        cy.visit(`iframe.html?id=components-${page}`)
    })
}
export const shouldRenderElements = (elements: string[]) => {
    elements.map((element) =>
        it(`should render ${element}`, () => {
            cy.get(`${element}`).should('exist')
        })
    )
}

export const shouldNotRenderElements = (elements?: string[]) => {
    elements?.map((element) =>
        it(`should not render ${element}`, () => {
            cy.get(`${element}`).should('not.exist')
        })
    )
}
