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
        <ul>
            <li>
                Deserunt et occaecat do dolor ad irure amet consectetur id duis.
            </li>
            <li>
                Nulla duis voluptate adipisicing aliquip voluptate magna
                adipisicing.
            </li>
            <li>
                Nostrud voluptate excepteur nulla laboris sunt commodo
                reprehenderit incididunt quis laboris.
            </li>
        </ul>
        <p>
            Reprehenderit ut pariatur est pariatur duis esse non culpa. Cillum
            aliquip quis cillum nulla duis ut ex elit proident dolor. Labore
            proident non laboris nostrud ipsum eiusmod. Minim duis cillum non
            pariatur consectetur et commodo mollit culpa incididunt. Voluptate
            consequat nulla ea veniam commodo aliquip consectetur tempor
            cupidatat tempor anim.
        </p>
        <blockquote>
            "Duis commodo nostrud duis voluptate nisi. Nostrud fugiat
            adipisicing consequat sunt sint anim aliquip ut ea consequat sint
            esse. Pariatur ea anim nisi enim id quis incididunt id amet
            occaecat."
        </blockquote>
        <p>
            Reprehenderit ut pariatur est pariatur duis esse non culpa. Cillum
            aliquip quis cillum nulla duis ut ex elit proident dolor. Labore
            proident non laboris nostrud ipsum eiusmod. Minim duis cillum non
            pariatur consectetur et commodo mollit culpa incididunt. Voluptate
            consequat nulla ea veniam commodo aliquip consectetur tempor
            cupidatat tempor anim.
        </p>
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>The table header</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The table body</td>
                    <td>with two columns</td>
                </tr>
            </tbody>
        </table>
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
