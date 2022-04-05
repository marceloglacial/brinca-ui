import Hero from './Hero'

const testBaseUrl = (component: string) => {
    it(`Visit base url`, () => {
        cy.clearCookies()
        cy.visit(`/iframe.html?id=components-${component}`)
    })
}
const testClassName = (classname: string) => {
    it(`Should have ${classname} classname`, () => {
        cy.get(classname).should('exist')
    })
}

const testGlobal = () => {
    testClassName('.hero')
    testClassName('.hero__body')
    testClassName('.hero__header')
    testClassName('.hero__content')
    testClassName('.hero__image')
    testClassName('.hero figure')
    testClassName('.hero__image img')
    testClassName('.hero__button')
}

describe('Hero - Base', () => {
    testBaseUrl('hero')
    testGlobal()
})

describe('Hero - Reversed', () => {
    testBaseUrl('hero--reversed')
    testGlobal()
    testClassName('.hero--reversed')
})
