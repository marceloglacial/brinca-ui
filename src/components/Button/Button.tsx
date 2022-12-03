import React from 'react'
import styles from './ButtonStyles'

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: 'primary' | 'secondary' | 'danger'
    full?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
    const { variant = 'primary', children, full } = props
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${
                full && styles.full
            }`}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button
