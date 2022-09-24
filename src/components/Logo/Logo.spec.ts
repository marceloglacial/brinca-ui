import Logo from './Logo'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testContainer = () => {
    it(`Should render Logo container`, () => {
        cy.get('.logo.logo--color').should('exist')
    })
}

const testClassName = (classname: string) => {
    it(`Should have ${classname} classname`, () => {
        cy.get(classname).should('exist')
    })
}

describe('Image - Container', () => {
    testBaseUrl('logo')
    testContainer()
})

describe('Image - Color Variant', () => {
    testBaseUrl('logo')
    testClassName('.logo--color')
})

describe('Image - White Variant', () => {
    testBaseUrl('logo--white')
    testClassName('.logo--white')
})
