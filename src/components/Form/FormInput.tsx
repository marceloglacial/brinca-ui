import { FC, ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './FormStyles'

export interface FormInputProps {
    full?: boolean
}

const FormInput: FC<FormInputProps & ComponentPropsWithoutRef<'input'>> = (props): ReactElement => {
    const { full, type = 'text', disabled, ...inputProps } = props
    const fullClassName = full ? styles.inputFull : ''
    const disabledClassName = disabled ? styles.disabled : ''
    return (
        <input
            {...inputProps}
            type={type}
            className={`${styles[type] || styles.text} ${fullClassName} ${disabledClassName}`}
            disabled={disabled}
        />
    )
}
export default FormInput
