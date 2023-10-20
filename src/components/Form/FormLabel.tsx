import { FC, ReactNode } from 'react'
import styles from './FormStyles'

export interface FormLabelProps {
    children?: ReactNode
    full?: boolean
}

const FormLabel: FC<FormLabelProps & JSX.IntrinsicElements['label']> = (props): JSX.Element => {
    const { children, full } = props
    const fullClassName = full ? styles.inputFull : ''

    return (
        <label {...props} className={`${styles.label} ${fullClassName} `}>
            {children}
        </label>
    )
}
export default FormLabel
