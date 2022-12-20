import React from 'react'
import { Button } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Button Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Button Secondary',
    variant: 'secondary',
}
export const FullWidth = Template.bind({})
FullWidth.args = {
    children: 'Button Full',
    full: true,
}
