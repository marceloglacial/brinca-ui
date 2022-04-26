import Footer from '@components/Footer/Footer'
import { Meta } from '@storybook/react'
import Nav, { NavProps } from './Nav'
import NavItem from './NavItem'

const meta: Meta = {
    title: 'Components/Nav',
    component: Nav,
}

export default meta

export const Top = (args: any) => (
    <Nav className='test'>
        <NavItem>
            <a href='#'>Item 1</a>
        </NavItem>
        <NavItem>
            <a href='#'>Item 3</a>
        </NavItem>
        <NavItem>
            <a href='#'>Item 3</a>
        </NavItem>
    </Nav>
)
export const Bottom = (args: any) => (
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
