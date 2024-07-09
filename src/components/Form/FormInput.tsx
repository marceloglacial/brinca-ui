import { FC } from 'react'
import styles from './FormStyles'

export interface FormInputProps {
    full?: boolean
}

const FormInput: FC<FormInputProps & JSX.IntrinsicElements['input']> = (props): JSX.Element => {
    const { full, type = 'text', ...inputProps } = props
    const fullClassName = full ? styles.inputFull : ''
    return (
        <input
            {...inputProps}
            type={type}
            className={`${styles[type] || styles.text} ${fullClassName} `}
        />
    )
}
export default FormInput
