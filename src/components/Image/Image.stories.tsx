import { Meta } from '@storybook/react'
import Image from './Image'

const meta: Meta = {
    title: 'Components/Image',
    component: Image,
}

export default meta

const image = {
    src: 'https://www.brinca.ca/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdw2wjwhuv%2Fimages%2Ff_auto%2Cq_auto%2Fv1634082453%2Fbrinca%2Feventos%2F2021-picnic%2FBRINCA_-_PICNIC-65_dru6mn%2FBRINCA_-_PICNIC-65_dru6mn.jpg%3F_i%3DAA&w=3840&q=75',
    alt: 'people',
    width: '640',
    height: '320',
}

export const Base = (args: any) => (
    <Image {...image} onClick={() => alert('click')} />
)
export const Rounded = (args: any) => <Image {...image} rounded />
export const WithShadow = (args: any) => <Image {...image} rounded shadow />
