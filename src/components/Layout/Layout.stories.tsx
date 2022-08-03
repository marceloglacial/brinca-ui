import { Meta } from '@storybook/react'
import Layout from './Layout'

const meta: Meta = {
    title: 'Layouts/Default',
    component: Layout,
}
export default meta

const data = {
    image: {
        src: 'https://www.brinca.ca/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdw2wjwhuv%2Fimages%2Ff_auto%2Cq_auto%2Fv1634082453%2Fbrinca%2Feventos%2F2021-picnic%2FBRINCA_-_PICNIC-65_dru6mn%2FBRINCA_-_PICNIC-65_dru6mn.jpg%3F_i%3DAA&w=3840&q=75',
    },
    header: 'Card Header',
    content: `Et Lorem commodo ex fugiat aliquip pariatur qui mollit
nostrud velit magna eu. Dolore consectetur sit ut irure nisi
ipsum anim aute. Enim quis excepteur consequat commodo
incididunt dolor excepteur.`,
    button: 'Button',
}

export const Default = (args: any) => <Layout>{data.content}</Layout>
