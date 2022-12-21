import React, { FC } from 'react'
import styles from './FormStyles'

export interface FormInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    full?: boolean
}

const FormInput: FC<FormInputProps> = (props): JSX.Element => {
    const { full, type = 'text' } = props
    const fullClassName = full ? styles.inputFull : ''
    return <input className={`${styles[type]} ${fullClassName}`} {...props} />
}
export default FormInput
