import Section from '@components/Section/Section'
import { Meta } from '@storybook/react'
import Heading from './Heading'

const meta: Meta = {
    title: 'Components/Heading',
    component: Heading,
}

export default meta

export const Base = (args: any) => (
    <Section>
        <Heading>Base Heading</Heading>
        <p>
            Reprehenderit ut pariatur est pariatur duis esse non culpa. Cillum
            aliquip quis cillum nulla duis ut ex elit proident dolor. Labore
            proident non laboris nostrud ipsum eiusmod. Minim duis cillum non
            pariatur consectetur et commodo mollit culpa incididunt. Voluptate
            consequat nulla ea veniam commodo aliquip consectetur tempor
            cupidatat tempor anim.
        </p>
    </Section>
)
