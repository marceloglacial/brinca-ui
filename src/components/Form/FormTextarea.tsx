import { FC } from 'react'
import styles from './FormStyles'

export interface FormTextareaProps {
    full?: boolean
    value?: string
    defaultValue?: string
}

const FormTextarea: FC<FormTextareaProps & JSX.IntrinsicElements['textarea']> = (
    props
): JSX.Element => {
    const { full, ...textareaProps } = props
    const fullClassName = full ? styles.inputFull : ''

    return <textarea {...textareaProps} className={`${styles.textarea} ${fullClassName}`} />
}
export default FormTextarea
