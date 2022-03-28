import React, { FC } from 'react'
import styles from './ButtonStyles'

export interface ButtonProps {
    variant: 'primary' | 'secondary'
    full?: boolean | ''
}

const Button: FC<ButtonProps> = ({
    variant,
    children,
    full = '',
}): JSX.Element => {
    return (
        <button
            className={`${styles.container} ${styles[variant]} ${
                full && 'w-full'
            }`}
            type='button'
        >
            {children}
        </button>
    )
}
export default Button
