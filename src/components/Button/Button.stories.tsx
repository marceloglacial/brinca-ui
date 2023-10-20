import React from 'react'
import { Button } from '..'

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
export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Button Disabled',
    disabled: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
    children: 'Button Full',
    full: true,
}
