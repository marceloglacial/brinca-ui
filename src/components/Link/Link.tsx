import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './LinkStyles'

export type LinkTypes = 'default' | 'primary' | 'secondary' | 'white'
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: LinkTypes
    full?: boolean
    children: ReactNode
    className?: string
}

export const Link: React.FC<LinkProps> = (props) => {
    const { variant = 'default', children, full, className = '' } = props
    const isFullClassName = full ? styles.full : ''
    return (
        <a
            {...props}
            className={`${styles[variant]} ${isFullClassName} ${className}`}
        >
            {children}
        </a>
    )
}
