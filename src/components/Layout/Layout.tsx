import React, { FC, ReactNode } from 'react'
import styles from './LayoutStyles'

export interface LayoutProps {
    children?: ReactNode
    className?: string
}

const Layout: FC<LayoutProps> = ({ children, className = '' }): JSX.Element => {
    return (
        <div className={`${styles.container} ${className}`}>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </div>
    )
}
export default Layout
