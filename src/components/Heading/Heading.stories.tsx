import { Meta } from '@storybook/react'
import Heading from './Heading'

const meta: Meta = {
    title: 'Components/Heading',
    component: Heading,
}

export default meta

export const Base = (args: any) => (
    <>
        <Heading>Base Heading</Heading>
        <h1>Heading 1</h1>
        <p>
            Reprehenderit ut pariatur est pariatur duis esse non culpa. Cillum
            aliquip quis cillum nulla{' '}
            <a href='#'>duis ut ex elit proident dolor</a>. Labore proident non
            laboris nostrud ipsum eiusmod. Minim duis cillum non pariatur
            consectetur et commodo mollit culpa incididunt. Voluptate consequat
            nulla ea veniam commodo aliquip consectetur tempor cupidatat tempor
            anim.
        </p>
        <h2>Heading 2</h2>
        <p>
            Reprehenderit ut pariatur est pariatur duis esse non culpa. Cillum
            aliquip quis cillum nulla duis ut ex elit proident dolor. Labore
            proident non laboris nostrud ipsum eiusmod. Minim duis cillum non
            pariatur consectetur et commodo mollit culpa incididunt. Voluptate
            consequat nulla ea veniam commodo aliquip consectetur tempor
            cupidatat tempor anim.
        </p>
        <h3>Heading 3</h3>
        <p>
            Reprehenderit ut pariatur est pariatur duis esse non culpa. Cillum
            aliquip quis cillum nulla duis ut ex elit proident dolor. Labore
            proident non laboris nostrud ipsum eiusmod. Minim duis cillum non
            pariatur consectetur et commodo mollit culpa incididunt. Voluptate
            consequat nulla ea veniam commodo aliquip consectetur tempor
            cupidatat tempor anim.
        </p>
    </>
)
