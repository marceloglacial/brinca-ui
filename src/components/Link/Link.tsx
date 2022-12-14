import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './LinkStyles'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'default' | 'primary' | 'secondary'
    full?: boolean
    children: ReactNode
}

const Link: React.FC<LinkProps> = (props) => {
    const { variant = 'default', children, full } = props
    const isButtonClassName = variant !== 'default' ? styles.button : ''
    const isFullClassName = full ? styles.full : ''
    return (
        <a
            className={`${isButtonClassName} ${styles[variant]} ${isFullClassName}`}
            {...props}
        >
            {children}
        </a>
    )
}
export default Link
