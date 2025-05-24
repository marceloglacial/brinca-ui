import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './FormStyles'

export interface FormLabelProps {
    children?: ReactNode
    full?: boolean
}

const FormLabel: FC<FormLabelProps & ComponentPropsWithoutRef<'label'>> = (props): ReactElement => {
    const { children, full, ...labelProps } = props
    const fullClassName = full ? styles.inputFull : ''

    return (
        <label {...labelProps} className={`${styles.label} ${fullClassName} `}>
            {children}
        </label>
    )
}
export default FormLabel
