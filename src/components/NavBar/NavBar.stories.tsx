import Button from '@components/Button/Button'
import Nav, { NavProps } from '@components/Nav/Nav'
import { Meta } from '@storybook/react'
import NavBar from './NavBar'
import NavBarBrand from './NavBarBrand'
import NavBarContent from './NavBarContent'

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

export const Primary = (args: any) => (
    <NavBar>
        <NavBarBrand>
            <img
                src='https://www.brinca.ca/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75'
                width={230}
            />
        </NavBarBrand>
        <NavBarContent>
            <Nav {...menu} />
            <Button>Cadastre-se</Button>
        </NavBarContent>
    </NavBar>
)
