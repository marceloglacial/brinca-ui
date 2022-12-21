import React from 'react'
import { Form } from '..'

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
            <Form.Label full>Checkbox</Form.Label>
            <Form.Input
                type='checkbox'
                id='checkbox'
                placeholder='Text Input'
            />
            <Form.Label htmlFor='checkbox'>checkbox</Form.Label>
            <Form.Input
                type='checkbox'
                id='checkbox2'
                placeholder='Text Input'
            />
            <Form.Label htmlFor='checkbox2'>checkbox</Form.Label>
        </Form.Group>
        <Form.Group {...props}>
            <Form.Label full>Radio Button</Form.Label>
            <Form.Input type='radio' id='radio1' name='radio' />
            <Form.Label htmlFor='radio1'>radio</Form.Label>
            <Form.Input type='radio' id='radio2' name='radio' />
            <Form.Label htmlFor='radio2'>radio</Form.Label>
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor='textarea' full>
                Text Area
            </Form.Label>
            <Form.Textarea
                id='textarea'
                placeholder='Text area placeholder'
                full
                rows={10}
            />
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
    return <Form.Input {...props} placeholder='input text' />
}

export const InputFullWidth = (props) => {
    return <Form.Input {...props} placeholder='input text full' full />
}

export const Textarea = (props) => {
    return <Form.Textarea {...props} />
}

export const Checkbox = (props) => {
    return (
        <Form.Group {...props}>
            <Form.Input
                type='checkbox'
                id='checkbox'
                placeholder='Text Input'
            />
            <Form.Label htmlFor='checkbox'>checkbox</Form.Label>
        </Form.Group>
    )
}

export const RadioButton = (props) => {
    return (
        <>
            <Form.Group {...props} full>
                <Form.Input type='radio' id='radio1' name='radio' />
                <Form.Label htmlFor='radio1'>checkbox</Form.Label>
            </Form.Group>
            <Form.Group {...props} full>
                <Form.Input type='radio' id='radio2' name='radio' />
                <Form.Label htmlFor='radio2'>checkbox</Form.Label>
            </Form.Group>
        </>
    )
}
