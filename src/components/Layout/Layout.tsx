import React, { FC, ReactNode } from 'react'
import styles from './LayoutStyles'

export interface LayoutProps {
    header: ReactNode
    footer: ReactNode
    children?: ReactNode
    className?: string
}

export const Layout: FC<LayoutProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { header, footer, children, className = '' } = props
    return (
        <div {...props} className={`${styles.container} ${className}`}>
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
    )
}
