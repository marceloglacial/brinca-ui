import NavBar from '@components/NavBar/NavBar'
import { Meta } from '@storybook/react'
import Nav from './Nav'
import NavItem from './NavItem'

const meta: Meta = {
    title: 'Components/Nav',
    component: Nav,
}

export default meta

const items = [
    {
        title: 'Item 1',
        href: '#'
    },
    {
        title: 'Item 2',
        href: '#'
    },
    {
        title: 'Item 3',
        href: '#'
    },
    {
        title: 'Item 4',
        href: '#'
    },
    {
        title: 'Item 5',
        href: '#'
    },
    {
        title: 'Item 6',
        href: '#'
    },
]

export const Top = (args: any) => (
    <NavBar>
        <Nav className='test'>
        {items.map((item, index) => <NavItem key={index}>
                <a href={item.href}>{item.title}</a>
            </NavItem>
            )}
        </Nav>
    </NavBar>
)
export const Bottom = (args: any) => (
    <NavBar variant='footer'>
        <Nav className='test'>
        {items.map((item, index) => <NavItem key={index}>
                <a href={item.href}>{item.title}</a>
            </NavItem>
            )}
        </Nav>
    </NavBar>
)
