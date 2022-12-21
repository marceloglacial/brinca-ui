import React from 'react'
import styles from './ButtonStyles'

export type ButtonTypes = 'primary' | 'secondary'
export type ButtonSizeTypes = 'sm' | 'md' | 'lg'
export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: ButtonTypes
    full?: boolean
    className?: string
    size?: ButtonSizeTypes
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        variant = 'primary',
        children,
        full,
        className = '',
        size = 'md',
    } = props
    const fullClassName = full ? styles.full : ''
    return (
        <button
            {...props}
            className={`${styles.button} ${styles[variant]} ${fullClassName} ${styles.size[size]} ${className}`}
        >
            {children}
        </button>
    )
}
