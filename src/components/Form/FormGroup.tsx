import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './FormStyles'

export interface FormGroupProps {
    children?: ReactNode
}

const FormGroup: FC<FormGroupProps & ComponentPropsWithoutRef<'div'>> = ({
    children,
}): ReactElement => <div className={`${styles.group} `}>{children}</div>
export default FormGroup
