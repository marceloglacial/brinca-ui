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

describe('Logo - Container', () => {
    testBaseUrl('logo')
    testContainer()
})

describe('Logo - Color Variant', () => {
    testBaseUrl('logo')
    testClassName('.logo--color')
})

describe('Logo - White Variant', () => {
    testBaseUrl('logo--white')
    testClassName('.logo--white')
})

describe('Logo - Small', () => {
    testBaseUrl('logo--small')
    testClassName('.logo--xs')
})

describe('Logo - Default (meidum)', () => {
    testBaseUrl('logo--default')
    testClassName('.logo--md')
})

describe('Logo - Large', () => {
    testBaseUrl('logo--large')
    testClassName('.logo--lg')
})
