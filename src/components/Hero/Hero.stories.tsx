import React from 'react'
import Hero, { HeroProps } from './Hero'
import Button from '../Button/Button'

export default {
    title: 'Components/Hero',
    component: Hero,
}

const Template = (args) => <Hero {...args} />
const content: HeroProps = {
    title: 'Hero',
    description:
        'DescrAd mollit cillum velit fugiat ipsum nulla nulla consequat amet. Ex deserunt commodo pariatur mollit non enim officia nulla ad mollit ex. Amet pariatur consequat ea adipisicing nulla nostrud incididunt Lorem sunt adipisicing.iption',
    image: (
        <img
            src={`https://images.unsplash.com/photo-1527374071603-76de89807336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJhemlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
            alt={`Hero Image`}
            className='w-full h-full object-cover'
        />
    ),
    footer: <Button variant='secondary'>Button</Button>,
}

export const Default = Template.bind({})
Default.args = {
    title: content.title,
    description: content.description,
    image: content.image,
}

export const WithCTA = Template.bind({})
WithCTA.args = {
    title: content.title,
    description: content.description,
    image: content.image,
    footer: content.footer,
}

export const NoShadow = Template.bind({})
NoShadow.args = {
    title: content.title,
    description: content.description,
    image: content.image,
    footer: content.footer,
    shadow: false,
}

export const NoRounded = Template.bind({})
NoRounded.args = {
    title: content.title,
    description: content.description,
    image: content.image,
    footer: content.footer,
    shadow: false,
    rounded: false,
}

export const Reversed = Template.bind({})
Reversed.args = {
    title: content.title,
    description: content.description,
    image: content.image,
    footer: content.footer,
    reversed: true,
}
