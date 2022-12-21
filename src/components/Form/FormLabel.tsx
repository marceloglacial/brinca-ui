import React, { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormLabelProps
    extends React.DetailedHTMLProps<
        React.LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
    > {
    children?: ReactNode
    full?: boolean
}

const FormLabel: FC<FormLabelProps> = (props): JSX.Element => {
    const { children, full } = props
    const fullClassName = full ? styles.inputFull : ''

    return (
        <label className={`${styles.label} ${fullClassName}`} {...props}>
            {children}
        </label>
    )
}
export default FormLabel
