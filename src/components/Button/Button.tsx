import React, { FC } from 'react'
import styles from './ButtonStyles'

export interface ButtonProps {
    variant?: 'primary' | 'secondary'
    full?: boolean | ''
    isLink?: boolean
    url?: string
    onClick?: (e: unknown) => void
}

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    children,
    full = '',
    isLink,
    url = '#',
    onClick,
}): JSX.Element => {
    if (isLink)
        return (
            <a
                className={`${styles.container} ${styles.link} ${
                    styles[variant]
                } ${full && styles.full}`}
                href={url}
            >
                {children}
            </a>
        )

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
