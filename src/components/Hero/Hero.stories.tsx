import React from 'react'
import { Button, Hero } from '..'

export default {
    title: 'Components/Hero',
    component: Hero,
}

const content = {
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

export const Base = (props) => {
    return (
        <Hero {...props}>
            <Hero.Image>{content.image}</Hero.Image>
            <Hero.Body>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
            </Hero.Body>
        </Hero>
    )
}

export const NoShadow = (props) => {
    return (
        <Hero {...props}>
            <Hero.Image noShadow>{content.image}</Hero.Image>
            <Hero.Body>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
            </Hero.Body>
        </Hero>
    )
}
export const Squared = (props) => {
    return (
        <Hero {...props}>
            <Hero.Image squared noShadow>
                {content.image}
            </Hero.Image>
            <Hero.Body>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
            </Hero.Body>
        </Hero>
    )
}

export const Reversed = (props) => {
    return (
        <Hero {...props} reversed>
            <Hero.Image>{content.image}</Hero.Image>
            <Hero.Body>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
            </Hero.Body>
        </Hero>
    )
}
