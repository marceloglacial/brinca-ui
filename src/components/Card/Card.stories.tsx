import React from 'react'
import Card, { CardProps } from './Card'
import Button from '../Button/Button'

export default {
    title: 'Components/Card',
    component: Card,
}

const Template = (args) => <Card {...args} />
const content: CardProps = {
    title: 'Card',
    description:
        'DescrAd mollit cillum velit fugiat ipsum nulla nulla consequat amet. Ex deserunt commodo pariatur mollit non enim officia nulla ad mollit ex. Amet pariatur consequat ea adipisicing nulla nostrud incididunt Lorem sunt adipisicing.iption',
    image: (
        <img
            src={`https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkaGVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`}
            alt={`Card Image`}
            className='w-full h-full object-cover'
        />
    ),
    footer: <Button full>Button</Button>,
}

export const Primary = Template.bind({})
Primary.args = {
    title: content.title,
}

export const WithDescription = Template.bind({})
WithDescription.args = {
    title: content.title,
    description: content.description,
}
export const WithImage = Template.bind({})
WithImage.args = {
    title: content.title,
    description: content.description,
    image: content.image,
}

export const WithButton = Template.bind({})
WithButton.args = {
    title: content.title,
    description: content.description,
    image: content.image,
    footer: content.footer,
}
