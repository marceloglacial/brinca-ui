import { Meta, Story } from '@storybook/react'
import Card from './Card'

const meta: Meta = {
    title: 'Components/Card',
    component: Card,
}

export default meta

const Template: Story<any> = (args) => <Card {...args}></Card>

export const Base = Template.bind({})
Base.args = {
    label: 'Username',
}
