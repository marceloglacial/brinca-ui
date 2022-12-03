import { Button } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
}

const Template = (args) => ({
    //👇 Your template goes here
})

const PrimaryButton = Template.bind({})

PrimaryButton.args = {
    variant: 'primary',
}

export const Primary = {
    args: {
        variant: 'primary',
        children: 'My First Button',
    },
}
