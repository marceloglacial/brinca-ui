import { FC } from 'react'
import styles from './FormStyles'

export interface FormInputProps {
    full?: boolean
}

const FormInput: FC<FormInputProps & JSX.IntrinsicElements['input']> = (props): JSX.Element => {
    const { full, type = 'text' } = props
    const fullClassName = full ? styles.inputFull : ''
    return <input {...props} className={`${styles[type] || styles.text} ${fullClassName} `} />
}
export default FormInput
