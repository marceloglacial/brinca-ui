import { FC } from 'react'
import styles from './FormStyles'

export interface FormInputProps {
    full?: boolean
}

const FormInput: FC<FormInputProps & JSX.IntrinsicElements['input']> = (props): JSX.Element => {
    const { full, type = 'text', disabled, ...inputProps } = props
    const fullClassName = full ? styles.inputFull : ''
    const allStyles = disabled
        ? styles.disabled
        : `${styles[type] || styles.text} ${fullClassName} `
    return <input {...inputProps} type={type} className={allStyles} />
}
export default FormInput
