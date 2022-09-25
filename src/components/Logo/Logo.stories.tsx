import { Meta } from '@storybook/react'
import Logo from './Logo'

const meta: Meta = {
    title: 'Components/Logo',
    component: Logo,
}

export default meta

export const Color = (args: any) => <Logo />
export const White = (args: any) => (
    <span className='bg-black p-4 inline-block'>
        <Logo variant='white' />
    </span>
)
export const Small = (args: any) => <Logo size='xs' />
export const Default = (args: any) => <Logo size='md' />
export const Large = (args: any) => <Logo size='lg' />
