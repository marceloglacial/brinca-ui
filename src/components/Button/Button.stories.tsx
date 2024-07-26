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

export const Sizes = () => {
    return (
        <div className='grid gap-4'>
            <div className='flex items-center gap-4'>
                <div>
                    <Button size='sm'>Small</Button>
                </div>
                <div>
                    <Button size='md'>Medium</Button>
                </div>
                <div>
                    <Button size='lg'>Large</Button>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <Button variant='secondary' size='sm'>
                        Small
                    </Button>
                </div>
                <div>
                    <Button variant='secondary'>Medium</Button>
                </div>
                <div>
                    <Button variant='secondary' size='lg'>
                        Large
                    </Button>
                </div>
            </div>
        </div>
    )
}
