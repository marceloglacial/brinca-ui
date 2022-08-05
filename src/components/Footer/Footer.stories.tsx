import Footer from '@components/Footer/Footer'
import Nav from '@components/Nav/Nav'
import NavItem from '@components/Nav/NavItem'
import { Meta } from '@storybook/react'

const meta: Meta = {
    title: 'Components/Footer',
    component: Footer,
}

export default meta

export const Base = (args: any) => (
    <Footer>
        <Nav className='test'>
            <NavItem accent>
                <a href='#'>Item 1</a>
            </NavItem>
            <NavItem accent>
                <a href='#'>Item 2</a>
            </NavItem>
            <NavItem accent>
                <a href='#'>Item 3</a>
            </NavItem>
        </Nav>
    </Footer>
)
