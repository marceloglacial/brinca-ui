import React, { FC, ReactNode } from 'react'
import styles from './ButtonStyles'

export interface ButtonProps {
    variant?: 'primary' | 'secondary'
    full?: boolean | ''
    href?: string
    onClick?: (e: unknown) => void
    children: ReactNode
}

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    children,
    full = '',
    href,
    onClick,
}): JSX.Element => {
    const linkClassName = !full ? styles.link : ``
    const fullClassName = full && styles.full
    const buttonClassName = `${styles.container} ${styles[variant]} ${linkClassName} ${fullClassName}`

    if (href)
        return (
            <a className={buttonClassName} href={href}>
                {children}
            </a>
        )

    return (
        <button className={buttonClassName} type='button' onClick={onClick}>
            {children}
        </button>
    )
}
export default Button
