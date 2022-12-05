import React, { FC, ReactNode } from 'react'
import styles from './LayoutStyles'

export interface LayoutProps {
    children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.container}>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </div>
    )
}
export default Layout
