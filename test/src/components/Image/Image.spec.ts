import Image from './Image'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testContainer = () => {
    it(`Should render Image`, () => {
        cy.get('.image').should('exist')
        cy.get('img').should('exist')
    })
}

const testClassName = (classname: string) => {
    it(`Should have ${classname} classname`, () => {
        cy.get(classname).should('exist')
    })
}

describe('Image - Base', () => {
    testBaseUrl('image--base')
    testContainer()
})

describe('Image - Rounded', () => {
    testBaseUrl('image--rounded')
    testContainer()
    testClassName('.image--rounded')
})

describe('Image - with shadow', () => {
    testBaseUrl('image--with-shadow')
    testContainer()
    testClassName('.image--shadow')
})
