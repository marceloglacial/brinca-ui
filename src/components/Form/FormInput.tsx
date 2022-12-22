import React, { FC } from 'react'
import styles from './FormStyles'

export interface FormInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    full?: boolean
    className?: string
}

const FormInput: FC<FormInputProps> = (props): JSX.Element => {
    const { full, type = 'text', className = '' } = props
    const fullClassName = full ? styles.inputFull : ''
    return (
        <input
            {...props}
            className={`${
                styles[type] || styles.text
            } ${fullClassName} ${className}`}
        />
    )
}
export default FormInput
