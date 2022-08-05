import NavBar from '@components/NavBar/NavBar'
import { Meta } from '@storybook/react'
import Nav from './Nav'
import NavItem from './NavItem'

const meta: Meta = {
    title: 'Components/Nav',
    component: Nav,
}

export default meta

export const Top = (args: any) => (
    <NavBar>
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
    </NavBar>
)
export const Bottom = (args: any) => (
    <NavBar variant='footer'>
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
    </NavBar>
)
