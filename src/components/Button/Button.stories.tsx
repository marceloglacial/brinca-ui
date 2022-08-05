import { Meta } from '@storybook/react'
import Button from './Button'

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
}

export default meta

export const Primary = (args: any) => (
    <Button onClick={() => alert('click')}>Primary Button</Button>
)

export const Secondary = (args: any) => (
    <Button variant='secondary' onClick={() => alert('click')}>
        Secondary Button
    </Button>
)

export const AsLink = (args: any) => <Button href='#'>As Link</Button>
export const FullWidth = (args: any) => (
    <Button href='#' full>
        Full Width
    </Button>
)
