import React from 'react'
import Link from './Link'

export default {
    title: 'Components/Link',
    component: Link,
}

const Template = (args) => <Link {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Link Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Link Secondary',
    variant: 'secondary',
}
export const FullWidth = Template.bind({})
FullWidth.args = {
    children: 'Link Full',
    full: true,
}
