import { Meta, Story } from '@storybook/react'
import Button from './Button'

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
}

export default meta

const Template: Story<any> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    children: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary Button',
}
export const FullWidth = Template.bind({})
FullWidth.args = {
    variant: 'primary',
    children: 'Full Width',
    full: true,
}
