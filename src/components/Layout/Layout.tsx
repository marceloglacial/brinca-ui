import React, { FC, ReactNode } from 'react'
import styles from './LayoutStyles'

export interface LayoutProps {
    header: ReactNode
    footer: ReactNode
    children?: ReactNode
    className?: string
}

const Layout: FC<LayoutProps> = ({
    header,
    footer,
    children,
    className = '',
}): JSX.Element => {
    return (
        <div className={`${styles.container} ${className}`}>
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
    )
}
export default Layout
