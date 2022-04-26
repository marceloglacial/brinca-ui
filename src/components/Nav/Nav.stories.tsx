import Footer from '@components/Footer/Footer'
import { Meta } from '@storybook/react'
import Nav, { NavProps } from './Nav'

const meta: Meta = {
    title: 'Components/Nav',
    component: Nav,
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

export const Top = (args: any) => <Nav {...menu} />
export const Bottom = (args: any) => (
    <Footer>
        <Nav variant={'bottom'} {...menu} />
    </Footer>
)
