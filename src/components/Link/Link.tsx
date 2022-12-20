import React, { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './LinkStyles'

export type LinkTypes = 'default' | 'primary' | 'secondary' | 'white'
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: LinkTypes
    full?: boolean
    children: ReactNode
}

const Link: React.FC<LinkProps> = (props) => {
    const { variant = 'default', children, full } = props
    const isFullClassName = full ? styles.full : ''
    return (
        <a className={`${styles[variant]} ${isFullClassName}`} {...props}>
            {children}
        </a>
    )
}
export default Link
