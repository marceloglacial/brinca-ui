import React from 'react'
import styles from './ButtonStyles'

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: 'primary' | 'secondary'
    full?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
    const { variant = 'primary', children, full } = props
    const fullClassName = full ? styles.full : ''
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${fullClassName}`}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button
