import { Button } from '../src'

export default {
    title: 'My Component/Button',
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
