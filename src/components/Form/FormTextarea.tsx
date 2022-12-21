import React, { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormTextareaProps
    extends React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    children?: ReactNode
    className?: string
    full?: boolean
}

const FormTextarea: FC<FormTextareaProps> = (props): JSX.Element => {
    const { children, full, className = '' } = props
    const fullClassName = full ? styles.inputFull : ''

    return (
        <textarea
            {...props}
            className={`${styles.textarea} ${fullClassName} ${className}`}
        >
            {children}
        </textarea>
    )
}
export default FormTextarea
