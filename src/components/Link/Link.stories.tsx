import React from 'react'
import Link from './Link'

export default {
    title: 'Components/Link',
    component: Link,
}

export const Default = (props) => (
    <Link href='#' {...props}>
        Default
    </Link>
)
export const Primary = (props) => (
    <Link href='#' variant='primary' {...props}>
        Primary
    </Link>
)
export const Secondary = (props) => (
    <Link href='#' variant='secondary' {...props}>
        Secondary
    </Link>
)
export const Full = (props) => (
    <Link href='#' variant='secondary' full {...props}>
        Full
    </Link>
)
export const White = (props) => (
    <div className='bg-green-600 p-8'>
        <Link href='#' variant='white' {...props}>
            White
        </Link>
    </div>
)

// const Template = (args) => <Link {...args} />

// export const Default = Template.bind({})
// Default.args = {
//     children: 'Link Default',
//     href: '#',
// }
// export const Primary = Template.bind({})
// Primary.args = {
//     children: 'Link Primary',
//     href: '#',
//     variant: 'primary',
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//     children: 'Link Secondary',
//     variant: 'secondary',
//     href: '#',
// }

// export const White = Template.bind({})
// White.args = {
//     children: 'Link Secondary',
//     variant: 'whhite',
//     href: '#',
// }

// export const FullWidth = Template.bind({})
// FullWidth.args = {
//     children: 'Link Full',
//     variant: 'primary',
//     full: true,
//     href: '#',
// }
