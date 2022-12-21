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
    'data-testid': 'button--primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Button Secondary',
    variant: 'secondary',
    'data-testid': 'button--secondary',
}
export const FullWidth = Template.bind({})
FullWidth.args = {
    children: 'Button Full',
    full: true,
    'data-testid': 'button--full-width',
}
