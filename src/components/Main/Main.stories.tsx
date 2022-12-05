import React from 'react'
import Main from './Main'

export default {
    title: 'Components/Main',
    component: Main,
}

const Template = (args) => <Main {...args} />

const content = (
    <p>
        Et non amet ullamco exercitation. Anim sint excepteur exercitation
        dolore dolore aliquip dolore veniam laborum dolore Lorem deserunt
        nostrud. Lorem eiusmod ipsum laborum ad dolore tempor ipsum non. Culpa
        sunt irure quis aute esse ut. Ad nulla culpa anim anim deserunt laborum
        sit velit dolore occaecat laboris deserunt non. Sunt Lorem amet sit do
        et Lorem culpa minim aliqua laboris ullamco non proident sit.
    </p>
)

export const SmallSpacing = Template.bind({})
SmallSpacing.args = {
    children: (
        <Main spacing='s'>
            <h3>Small Spacing</h3>
            {content}
            {content}
            {content}
        </Main>
    ),
}

export const DefaultSpacing = Template.bind({})
DefaultSpacing.args = {
    children: (
        <Main>
            <h3>Default Spacing</h3>
            {content}
            {content}
            {content}
        </Main>
    ),
}

export const LargeSpacing = Template.bind({})
LargeSpacing.args = {
    children: (
        <Main spacing='l'>
            <h3>Large Spacing</h3>
            {content}
            {content}
            {content}
        </Main>
    ),
}

export const ExtraLargeSpacing = Template.bind({})
ExtraLargeSpacing.args = {
    children: (
        <Main spacing='xl'>
            <h3>Extra Large Spacing</h3>
            {content}
            {content}
            {content}
        </Main>
    ),
}
