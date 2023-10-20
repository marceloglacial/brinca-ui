import { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormTextareaProps {
    children?: ReactNode
    full?: boolean
}

const FormTextarea: FC<FormTextareaProps & JSX.IntrinsicElements['textarea']> = (
    props
): JSX.Element => {
    const { children, full } = props
    const fullClassName = full ? styles.inputFull : ''

    return (
        <textarea {...props} className={`${styles.textarea} ${fullClassName} `}>
            {children}
        </textarea>
    )
}
export default FormTextarea
