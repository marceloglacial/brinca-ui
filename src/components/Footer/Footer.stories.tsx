import Footer from '@components/Footer/Footer'
import Nav from '@components/Nav/Nav'
import { Meta } from '@storybook/react'

const meta: Meta = {
    title: 'Components/Footer',
    component: Footer,
}

export default meta

const menu = {
    menu: [
        {
            text: 'Item 1',
            link: '#',
            menu: [
                {
                    text: 'Item 1.1',
                    link: '#',
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
}

export const Base = (args: any) => (
    <Footer>
        <Nav variant={'bottom'} className='test' {...menu} />
    </Footer>
)
