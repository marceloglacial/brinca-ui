import React from 'react'
import styles from './ButtonStyles'

export type ButtonTypes = 'primary' | 'secondary'
export type ButtonSizeTypes = 'sm' | 'md' | 'lg'
export interface ButtonProps {
    variant?: ButtonTypes
    full?: boolean
    className?: string
    size?: ButtonSizeTypes
}

export const Button: React.FC<ButtonProps & JSX.IntrinsicElements['button']> = (props) => {
    const { variant = 'primary', children, full, className = '', size = 'md' } = props
    const fullClassName = full ? styles.full : ''
    const componentProps = {
        ...props,
        full: undefined,
        className: `${styles.button} ${styles[variant]} ${fullClassName} ${styles.size[size]} ${className}`,
    }
    return <button {...componentProps}>{children}</button>
}
