import React from 'react'
import styles from './ButtonStyles'

export type ButtonTypes = 'primary' | 'secondary'
export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: ButtonTypes
    full?: boolean
    className?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { variant = 'primary', children, full, className = '' } = props
    const fullClassName = full ? styles.full : ''
    return (
        <button
            {...props}
            className={`${styles.button} ${styles[variant]} ${fullClassName} ${className}`}
        >
            {children}
        </button>
    )
}
