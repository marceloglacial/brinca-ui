import React, { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormGroupProps {
    children?: ReactNode
    className?: string
}

const FormGroup: FC<FormGroupProps & JSX.IntrinsicElements['div']> = ({
    children,
    className = '',
}): JSX.Element => <div className={`${styles.group} ${className}`}>{children}</div>
export default FormGroup
