import React, { FC } from 'react'
import styles from './ButtonStyles'

export interface ButtonProps {
    variant?: 'primary' | 'secondary'
    full?: boolean | ''
    onClick?: (e: unknown) => void
}

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    children,
    full = '',
    onClick,
}): JSX.Element => {
    return (
        <button
            className={`${styles.container} ${styles[variant]} ${
                full && styles.full
            }`}
            type='button'
            onClick={onClick}
        >
            {children}
        </button>
    )
}
export default Button
