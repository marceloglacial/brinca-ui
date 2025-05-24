import { FC } from 'react'
import styles from './ButtonStyles'

export type ButtonTypes = 'primary' | 'secondary'
export type ButtonSizeTypes = 'sm' | 'md' | 'lg'
export interface ButtonProps {
    variant?: ButtonTypes
    full?: boolean
    size?: ButtonSizeTypes
    disabled?: boolean
}

export const Button: FC<ButtonProps & React.ComponentProps<'button'>> = (props) => {
    const { variant = 'primary', children, full, size = 'md', disabled } = props
    const fullClassName = full ? styles.full : ''
    const buttoClassName = disabled
        ? `${styles.button} ${styles.disabled} ${styles.size[size as keyof typeof styles.size]}`
        : `${styles.button} ${styles[variant as keyof typeof styles]} ${fullClassName} ${styles.size[size as keyof typeof styles.size]}`
    const componentProps = {
        ...props,
        full: undefined,
        className: buttoClassName,
    }
    return <button {...componentProps}>{children}</button>
}
