import React, { FC, ReactNode } from 'react'
import FormGroup from './FormGroup'
import FormInput from './FormInput'
import FormLabel from './FormLabel'
import styles from './FormStyles'

export interface FormProps
    extends React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    > {
    className?: string
    children: ReactNode
}

const FormContainer: FC<FormProps> = (props): JSX.Element => {
    const { className = '', children } = props
    return (
        <form className={`${styles.form} ${className}`} {...props}>
            {children}
        </form>
    )
}

export const Form = Object.assign(FormContainer, {
    Label: FormLabel,
    Group: FormGroup,
    Input: FormInput,
})

FormContainer.displayName = 'Form'
FormGroup.displayName = 'Form.Group'
FormLabel.displayName = 'Form.Label'
FormInput.displayName = 'Form.Input'
