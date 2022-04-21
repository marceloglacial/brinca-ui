import { Meta, Story } from '@storybook/react'
import Nav, { NavProps } from './Nav'

const meta: Meta = {
    title: 'Components/Nav',
    component: Nav,
}

export default meta

const Template: Story<NavProps> = (args) => <Nav {...args} />

export const Base = Template.bind({})
Base.args = {
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
