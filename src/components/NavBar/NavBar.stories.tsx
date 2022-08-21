import Nav from '@components/Nav/Nav'
import { Meta } from '@storybook/react'
import NavBarBrand from './NavBarBrand'
import NavBarContent from './NavBarContent'
import NavBar from './NavBar'
import Button from '@components/Button/Button'
import NavBarSocial from './NavBarSocial'
import NavItem from '@components/Nav/NavItem'
import { useState } from 'react'

const meta: Meta = {
    title: 'Components/NavBar',
    component: NavBar,
}

export default meta

const navBarItems = [
    {
        text: 'Item 1',
        href: '#',
    },
    {
        text: 'Item 2',
        href: '#',
    },
    {
        text: 'Item 3',
        href: '#',
    },
    {
        text: 'Item 4',
        href: '#',
    },
    {
        text: 'Item 5',
        href: '#',
    },
    {
        text: 'Item 6',
        href: '#',
    },
]

export const Top = (args: any) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <NavBar className='test'>
            <NavBarBrand>
                <a href='#'>
                    <img
                        src='https://www.brinca.ca/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75'
                        width={230}
                    />
                </a>
            </NavBarBrand>
            <NavBarContent>
                <Nav className='hidden lg:flex'>
                    {navBarItems.map((item, index) => (
                        <NavItem key={index}>
                            <a href={item.href}>{item.text}</a>
                        </NavItem>
                    ))}
                    <Button href='#'>Button</Button>
                </Nav>
                <div className='lg:hidden flex justify-end flex-grow'>
                    <Button
                        variant='primary'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Mobile
                    </Button>
                </div>
            </NavBarContent>
        </NavBar>
    )
}

export const Bottom = (args: any) => (
    <NavBar variant='footer'>
        <NavBarBrand>
            <a href='#'>
                <img
                    src='https://www.brinca.ca/_next/image?url=%2Fimages%2Flogo-white.png&w=384&q=75'
                    width={150}
                />
            </a>
        </NavBarBrand>
        <NavBarSocial>Social</NavBarSocial>
        <NavBarContent>
            <Nav>
                {navBarItems.map((item, index) => (
                    <NavItem key={index} accent>
                        <a href={item.href}>{item.text}</a>
                    </NavItem>
                ))}
            </Nav>
        </NavBarContent>
    </NavBar>
)
