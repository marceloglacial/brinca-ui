import { FC, ReactNode } from 'react'
import FormGroup from './FormGroup'
import FormInput from './FormInput'
import FormLabel from './FormLabel'
import FormSelect from './FormSelect'
import styles from './FormStyles'
import FormTextarea from './FormTextarea'

export interface FormProps {
    className?: string
    children: ReactNode
}

const FormContainer: FC<FormProps & JSX.IntrinsicElements['form']> = (props): JSX.Element => {
    const { className = '', children } = props
    return (
        <form {...props} className={`${styles.form} ${className}`}>
            {children}
        </form>
    )
}

export const Form = Object.assign(FormContainer, {
    Label: FormLabel,
    Group: FormGroup,
    Input: FormInput,
    Textarea: FormTextarea,
    Select: FormSelect,
})

FormContainer.displayName = 'Form'
FormGroup.displayName = 'Form.Group'
FormLabel.displayName = 'Form.Label'
FormInput.displayName = 'Form.Input'
FormTextarea.displayName = 'Form.Textarea'
FormSelect.displayName = 'Form.Select'
