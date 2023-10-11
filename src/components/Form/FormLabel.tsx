import { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormLabelProps {
    children?: ReactNode
    full?: boolean
    className?: string
}

const FormLabel: FC<FormLabelProps & JSX.IntrinsicElements['label']> = (props): JSX.Element => {
    const { children, full, className = '' } = props
    const fullClassName = full ? styles.inputFull : ''

    return (
        <label {...props} className={`${styles.label} ${fullClassName} ${className}`}>
            {children}
        </label>
    )
}
export default FormLabel
