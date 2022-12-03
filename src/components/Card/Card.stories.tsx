import React from 'react'
import Card from './Card'

export default {
    title: 'Components/Card',
    component: Card,
}

export const Primary = () => <Card title='Card' />
export const WithDescription = () => (
    <Card
        title='Card'
        description='DescrAd mollit cillum velit fugiat ipsum nulla nulla consequat amet. Ex deserunt commodo pariatur mollit non enim officia nulla ad mollit ex. Amet pariatur consequat ea adipisicing nulla nostrud incididunt Lorem sunt adipisicing.iption'
    />
)
export const WithImage = () => (
    <Card
        title='Card'
        description='Id velit mollit ut eu nostrud voluptate dolore ipsum consequat. Sunt voluptate mollit pariatur enim mollit'
        image={{
            src: `https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkaGVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`,
            alt: `Card Image`,
        }}
    />
)
