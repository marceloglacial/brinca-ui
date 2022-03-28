import { Meta, Story } from '@storybook/react'
import Button from '../Button/Button'
import Card from './Card'
import CardBody from './CardBody'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardImage from './CardImage'

const meta: Meta = {
    title: 'Components/Card',
    component: Card,
}

export default meta

const Template: Story<any> = (args) => (
    <div className='w-[600px] p-16'>
        <Card {...args} />
    </div>
)

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

export const Base = Template.bind({})
Base.args = {
    children: (
        <div>
            <CardBody>
                <CardHeader>{data.header}</CardHeader>
                <CardContent>{data.content}</CardContent>
            </CardBody>
        </div>
    ),
}

export const WithImage = Template.bind({})
WithImage.args = {
    children: (
        <div>
            <CardImage {...data.image} />
            <CardBody>
                <CardHeader>{data.header}</CardHeader>
                <CardContent>{data.content}</CardContent>
            </CardBody>
        </div>
    ),
}

export const WithButton = Template.bind({})
WithButton.args = {
    children: (
        <div>
            <CardImage {...data.image} />
            <CardBody>
                <CardHeader>{data.header}</CardHeader>
                <CardContent>{data.content}</CardContent>
                <CardFooter>
                    <Button variant='primary' full>
                        {data.button}
                    </Button>
                </CardFooter>
            </CardBody>
        </div>
    ),
}
