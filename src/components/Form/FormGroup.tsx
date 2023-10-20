import { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormGroupProps {
    children?: ReactNode
}

const FormGroup: FC<FormGroupProps & JSX.IntrinsicElements['div']> = ({
    children,
}): JSX.Element => <div className={`${styles.group} `}>{children}</div>
export default FormGroup
