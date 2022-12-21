import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import { ButtonSizeTypes } from '..'
import styles from './LinkStyles'

export type LinkTypes = 'default' | 'primary' | 'secondary' | 'white'
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: LinkTypes
    full?: boolean
    children: ReactNode
    className?: string
    size?: ButtonSizeTypes
}

export const Link: React.FC<LinkProps> = (props) => {
    const {
        variant = 'default',
        children,
        full,
        className = '',
        size = 'md',
    } = props
    const isFullClassName = full ? styles.full : ''
    return (
        <a
            {...props}
            className={`${styles[variant]} ${isFullClassName} ${styles.size[size]} ${className}`}
        >
            {children}
        </a>
    )
}
