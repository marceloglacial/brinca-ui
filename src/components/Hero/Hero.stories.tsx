import { Meta, Story } from '@storybook/react'
import Hero from './Hero'
import HeroBody from './HeroBody'
import HeroButton from './HeroButton'
import HeroContent from './HeroContent'
import HeroHeader from './HeroHeader'
import HeroImage from './HeroImage'

const meta: Meta = {
    title: 'Components/Hero',
    component: Hero,
}

export default meta

const Template: Story<any> = (args) => <Hero {...args} />

export const Base = Template.bind({})
Base.args = {
    children: (
        <>
            <HeroBody>
                <HeroHeader>Hero Base</HeroHeader>
                <HeroContent>
                    <p>
                        Esse aliquip voluptate officia ad nisi et ullamco nisi
                        deserunt irure tempor aliquip. Lorem voluptate duis
                        cupidatat eiusmod aliqua sunt labore aliquip excepteur
                        consequat officia. Id incididunt aliqua minim deserunt
                        ea enim aliquip dolore dolor ex est esse consectetur
                        minim. Reprehenderit laborum commodo tempor velit.
                    </p>
                </HeroContent>
                <HeroButton variant='secondary'>Button</HeroButton>
            </HeroBody>
            <HeroImage
                image={{
                    src: 'https://res.cloudinary.com/dw2wjwhuv/image/upload/v1596053649/brinca/rafaela-biazi-0mfj0jJt0dY-unsplash_xwfifn.jpg',
                    rounded: true,
                    shadow: true,
                }}
            />
        </>
    ),
}
