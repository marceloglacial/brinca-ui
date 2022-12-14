import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './LinkStyles'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'secondary'
    full?: boolean
    children: ReactNode
}

const Link: React.FC<LinkProps> = (props) => {
    const { variant = 'primary', children, full } = props
    return (
        <a
            className={`${styles.button} ${styles[variant]} ${
                full && styles.full
            }`}
            {...props}
        >
            {children}
        </a>
    )
}
export default Link
