import { Meta } from '@storybook/react'
import Card from './Card'
import CardBody from './CardBody'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import Button from '@components/Button/Button'

const meta: Meta = {
    title: 'Components/Card',
    component: Card,
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

export const Base = (args: any) => (
    <Card>
        <CardBody>
            <CardHeader>{data.header}</CardHeader>
            <CardContent>{data.content}</CardContent>
        </CardBody>
    </Card>
)

export const WithImage = (args: any) => (
    <Card>
        <CardImage {...data.image} />
        <CardBody>
            <CardHeader>{data.header}</CardHeader>
            <CardContent>{data.content}</CardContent>
        </CardBody>
    </Card>
)

export const WithButton = (args: any) => (
    <Card>
        <CardImage {...data.image} />
        <CardBody>
            <CardHeader>{data.header}</CardHeader>
            <CardContent>{data.content}</CardContent>
            <CardFooter>
                <Button full>{data.button}</Button>
            </CardFooter>
        </CardBody>
    </Card>
)
