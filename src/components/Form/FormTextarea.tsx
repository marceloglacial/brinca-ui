import React, { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormTextareaProps
    extends React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    children?: ReactNode
    full?: boolean
}

const FormTextarea: FC<FormTextareaProps> = (props): JSX.Element => {
    const { children, full } = props
    const fullClassName = full ? styles.inputFull : ''

    return (
        <textarea className={`${styles.textarea} ${fullClassName}`} {...props}>
            {children}
        </textarea>
    )
}
export default FormTextarea
