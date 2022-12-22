import React, { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormLabelProps
    extends React.DetailedHTMLProps<
        React.LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
    > {
    children?: ReactNode
    full?: boolean
    className?: string
}

const FormLabel: FC<FormLabelProps> = (props): JSX.Element => {
    const { children, full, className = '' } = props
    const fullClassName = full ? styles.inputFull : ''

    return (
        <label
            {...props}
            className={`${styles.label} ${fullClassName} ${className}`}
        >
            {children}
        </label>
    )
}
export default FormLabel
