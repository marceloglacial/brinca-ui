import { FC, ReactNode } from 'react'
import styles from './LayoutStyles'

export interface LayoutProps {
    header: ReactNode
    footer: ReactNode
    children?: ReactNode
}

export const Layout: FC<LayoutProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { header, footer, children } = props
    return (
        <div className={`${styles.container}`}>
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
    )
}
