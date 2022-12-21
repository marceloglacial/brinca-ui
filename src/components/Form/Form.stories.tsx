import React from 'react'
import { Form } from '..'
import FormInput from './FormInput'

export default {
    title: 'Components/Form',
    component: Form,
}

export const KitchenSink = (props) => (
    <Form {...props}>
        <Form.Group>
            <Form.Label htmlFor='inputText'>Label</Form.Label>
            <Form.Input type='text' id='inputText' placeholder='Text Input' />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor='inputText2' full>
                Label
            </Form.Label>
            <Form.Input
                type='text'
                id='inputText2'
                placeholder='Text Input'
                full
            />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor='inputText3' full>
                Label
            </Form.Label>
            <Form.Input type='text' id='inputText3' placeholder='Text Input' />
            <Form.Input type='text' id='inputText4' placeholder='Text Input' />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor='inputText5' full>
                Label
            </Form.Label>
            <Form.Input
                type='checkbox'
                id='inputText5'
                placeholder='Text Input'
            />
            <Form.Label htmlFor='inputText5'>checkbox</Form.Label>
        </Form.Group>
        <Form.Group>
            <Form.Input
                type='button'
                id='inputButton'
                value='Button'
                onClick={() => alert('Click!')}
            />
        </Form.Group>
    </Form>
)

export const FormWrapper = (props) => {
    return <Form {...props}>Form Wrapper</Form>
}
export const Group = (props) => {
    return <Form.Group {...props}>content</Form.Group>
}

export const Label = (props) => {
    return <Form.Label {...props}>Label</Form.Label>
}
export const Input = (props) => {
    return <FormInput {...props} />
}

export const InputFullWidth = (props) => {
    return <FormInput {...props} full />
}
