import React from 'react'
import Link from './Link'

export default {
    title: 'Components/Link',
    component: Link,
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Link Default',
    href: '#',
}
export const Primary = Template.bind({})
Primary.args = {
    children: 'Link Primary',
    href: '#',
    variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Link Secondary',
    variant: 'secondary',
    href: '#',
}
export const FullWidth = Template.bind({})
FullWidth.args = {
    children: 'Link Full',
    variant: 'primary',
    full: true,
    href: '#',
}
