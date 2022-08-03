import { FC, ReactNode } from 'react'
import LayoutFooter from './LayoutFooter'
import LayoutHeader, { LayoutHeaderProps } from './LayoutHeader'
import styles from './LayoutStyles'

export interface LayoutProps {
    children: ReactNode
    header: LayoutHeaderProps
    footer?: {
        menu?: MenuItems[]
    }
}

export interface MenuItems {
    href: string
    text: string
}

const Layout: FC<LayoutProps> = ({ children, header, footer }) => {
    return (
        <div className={styles.container}>
            <LayoutHeader {...header} />
            <main>{children}</main>
            <LayoutFooter {...footer} />
        </div>
    )
}
export default Layout
