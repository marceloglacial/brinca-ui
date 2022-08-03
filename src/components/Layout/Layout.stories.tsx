import { Meta } from '@storybook/react'
import Layout from './Layout'

const meta: Meta = {
    title: 'Layouts/Default',
    component: Layout,
}
export default meta

const data = {
    header: {
        menu: [
            {
                href: '#',
                text: 'Item 1',
            },
            {
                href: '#',
                text: 'Item 2',
            },
            {
                href: '#',
                text: 'Item 3',
            },
        ],
    },
    footer: {
        menu: [
            {
                href: '#',
                text: 'Item 1',
            },
            {
                href: '#',
                text: 'Item 2',
            },
            {
                href: '#',
                text: 'Item 3',
            },
        ],
    },
}

export const Default = (args: any) => (
    <Layout {...data}>
        <p>
            Et Lorem commodo ex fugiat aliquip pariatur qui mollit nostrud velit
            magna eu. Dolore consectetur sit ut irure nisi ipsum anim aute. Enim
            quis excepteur consequat commodo incididunt dolor excepteur.
        </p>
    </Layout>
)
