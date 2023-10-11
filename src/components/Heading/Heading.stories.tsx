import { Heading } from '..'

export default {
    title: 'Components/Heading',
    component: Heading,
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <h1>Heading</h1>,
    id: 'test',
}
