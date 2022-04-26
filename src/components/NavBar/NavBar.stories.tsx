import Nav, { NavProps } from '@components/Nav/Nav'
import { Meta } from '@storybook/react'
import NavBarBrand from './NavBarBrand'
import NavBarContent from './NavBarContent'
import NavBar from './NavBar'
import Button from '@components/Button/Button'
import Footer from '@components/Footer/Footer'
import NavBarSocial from './NavBarSocial'

const meta: Meta = {
    title: 'Components/NavBar',
    component: NavBar,
}

export default meta

const menu: NavProps = {
    menu: [
        {
            text: 'Item 1',
            link: '#',
            menu: [
                {
                    text: 'Item 1.1',
                    link: '#',
                    className: 'test-menu-item',
                },
            ],
        },
        {
            text: 'Item 2',
            link: '#',
        },
        {
            text: 'Item 3',
            link: '#',
        },
    ],
    className: 'test',
}

export const Top = (args: any) => (
    <NavBar>
        <NavBarBrand>
            <a href='#'>
                <img
                    src='https://www.brinca.ca/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75'
                    width={230}
                />
            </a>
        </NavBarBrand>
        <NavBarContent>
            <Nav {...menu} />
            <Button isLink url='#'>
                Button
            </Button>
        </NavBarContent>
    </NavBar>
)
export const Bottom = (args: any) => (
    <Footer>
        <NavBar>
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
                <Nav {...menu} variant='bottom' />
            </NavBarContent>
        </NavBar>
    </Footer>
)
