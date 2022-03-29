import { Meta, Story } from '@storybook/react'
import Image from './Image'

const meta: Meta = {
    title: 'Components/Image',
    component: Image,
}

export default meta

const Template: Story<any> = (args) => (
    <div className='p-8'>
        <Image {...args} />
    </div>
)

const image = {
    src: 'https://www.brinca.ca/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdw2wjwhuv%2Fimages%2Ff_auto%2Cq_auto%2Fv1634082453%2Fbrinca%2Feventos%2F2021-picnic%2FBRINCA_-_PICNIC-65_dru6mn%2FBRINCA_-_PICNIC-65_dru6mn.jpg%3F_i%3DAA&w=3840&q=75',
    alt: 'people',
    width: 640,
    height: 320,
}

export const Base = Template.bind({})
Base.args = {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    onClick: () => alert('click'),
}

export const Rounded = Template.bind({})
Rounded.args = {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    rounded: true,
}

export const WithShadow = Template.bind({})
WithShadow.args = {
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    rounded: true,
    shadow: true,
}
